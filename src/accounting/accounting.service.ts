import { Injectable } from '@nestjs/common';
import { PriceKind } from '@prisma/client';
import { DatabaseService } from '../database/database.service';
import { buildBillingPeriods } from '../common/utils/pricing.util';

interface MonthBucket {
  label: string;
  monthKey: string;
  expected: number;
  revenue: number;
}

function monthKey(d: Date): string {
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`;
}

function monthLabel(d: Date): string {
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

@Injectable()
export class AccountingService {
  constructor(private readonly prisma: DatabaseService) {}

  async getMonthlyTimeline(academyId: string) {
    const enrollments = await this.prisma.studentProgram.findMany({
      where: { isActive: true, student: { academyId } },
      include: {
        payments: true,
        programLocation: { include: { program: { select: { endDate: true } } } },
      },
    });

    const buckets = new Map<string, MonthBucket>();
    const upsert = (d: Date): MonthBucket => {
      const key = monthKey(d);
      let b = buckets.get(key);
      if (!b) {
        b = { label: monthLabel(d), monthKey: key, expected: 0, revenue: 0 };
        buckets.set(key, b);
      }
      return b;
    };

    for (const e of enrollments) {
      const finalPrice = e.finalPrice ?? 0;

      if (
        e.priceKindSnapshot === PriceKind.MONTHLY &&
        e.monthlyBillingModeSnapshot &&
        e.basePriceSnapshot != null &&
        e.programLocation?.program?.endDate
      ) {
        const ds = e.discountSnapshot as { value: number; type: 'PERCENTAGE' | 'FLAT' } | null;
        const periods = buildBillingPeriods({
          monthlyAmount: e.basePriceSnapshot,
          billingMode: e.monthlyBillingModeSnapshot,
          enrolledAt: e.enrolledAt,
          programEndDate: e.programLocation.program.endDate,
          discount: ds ? { value: ds.value, type: ds.type as any } : null,
        });
        for (const p of periods) {
          const b = upsert(new Date(p.dueDate));
          b.expected += p.amount;
        }
      } else if (finalPrice > 0) {
        const b = upsert(e.enrolledAt);
        b.expected += finalPrice;
      }

      for (const p of e.payments) {
        const b = upsert(p.paidAt);
        b.revenue += p.type === 'REFUND' ? -p.amount : p.amount;
      }
    }

    const months = Array.from(buckets.values())
      .sort((a, b) => a.monthKey.localeCompare(b.monthKey))
      .map((m) => ({
        ...m,
        expected: parseFloat(m.expected.toFixed(2)),
        revenue: parseFloat(m.revenue.toFixed(2)),
      }));

    const totals = months.reduce(
      (acc, m) => ({ expected: acc.expected + m.expected, revenue: acc.revenue + m.revenue }),
      { expected: 0, revenue: 0 },
    );
    totals.expected = parseFloat(totals.expected.toFixed(2));
    totals.revenue = parseFloat(totals.revenue.toFixed(2));

    return { months, totals };
  }

  async getByLocation(academyId: string) {
    const enrollments = await this.prisma.studentProgram.findMany({
      where: { isActive: true, student: { academyId } },
      include: {
        payments: true,
        programLocation: {
          include: {
            location: { select: { id: true, name: true } },
            program: { select: { id: true, name: true, endDate: true } },
          },
        },
      },
    });

    interface ProgBucket { id: string; name: string; expected: number; revenue: number; enrolled: number }
    interface LocBucket { id: string; name: string; expected: number; revenue: number; enrolled: number; programs: Map<string, ProgBucket> }
    const locs = new Map<string, LocBucket>();

    for (const e of enrollments) {
      const loc = e.programLocation?.location;
      const prog = e.programLocation?.program;
      if (!loc || !prog) continue;

      let lb = locs.get(loc.id);
      if (!lb) {
        lb = { id: loc.id, name: loc.name, expected: 0, revenue: 0, enrolled: 0, programs: new Map() };
        locs.set(loc.id, lb);
      }
      let pb = lb.programs.get(prog.id);
      if (!pb) {
        pb = { id: prog.id, name: prog.name, expected: 0, revenue: 0, enrolled: 0 };
        lb.programs.set(prog.id, pb);
      }

      lb.enrolled += 1;
      pb.enrolled += 1;

      let expected = 0;
      if (
        e.priceKindSnapshot === PriceKind.MONTHLY &&
        e.monthlyBillingModeSnapshot &&
        e.basePriceSnapshot != null &&
        prog.endDate
      ) {
        const ds = e.discountSnapshot as { value: number; type: 'PERCENTAGE' | 'FLAT' } | null;
        const periods = buildBillingPeriods({
          monthlyAmount: e.basePriceSnapshot,
          billingMode: e.monthlyBillingModeSnapshot,
          enrolledAt: e.enrolledAt,
          programEndDate: prog.endDate,
          discount: ds ? { value: ds.value, type: ds.type as any } : null,
        });
        expected = periods.reduce((s, p) => s + p.amount, 0);
      } else {
        expected = e.finalPrice ?? 0;
      }

      const revenue = e.payments.reduce(
        (s, p) => (p.type === 'REFUND' ? s - p.amount : s + p.amount),
        0,
      );

      lb.expected += expected;
      lb.revenue += revenue;
      pb.expected += expected;
      pb.revenue += revenue;
    }

    const locations = Array.from(locs.values())
      .map((l) => ({
        id: l.id,
        name: l.name,
        enrolled: l.enrolled,
        expected: parseFloat(l.expected.toFixed(2)),
        revenue: parseFloat(l.revenue.toFixed(2)),
        programs: Array.from(l.programs.values())
          .map((p) => ({
            id: p.id,
            name: p.name,
            enrolled: p.enrolled,
            expected: parseFloat(p.expected.toFixed(2)),
            revenue: parseFloat(p.revenue.toFixed(2)),
          }))
          .sort((a, b) => b.expected - a.expected),
      }))
      .sort((a, b) => b.expected - a.expected);

    return locations;
  }
}
