import { Injectable, NotFoundException } from '@nestjs/common';
import { PriceKind } from '@prisma/client';
import { DatabaseService } from '../database/database.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { buildBillingPeriods, BillingPeriod } from '../common/utils/pricing.util';

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: DatabaseService) {}

  async create(dto: CreatePaymentDto, academyId: string) {
    const enrollment = await this.prisma.studentProgram.findFirst({
      where: { id: dto.studentProgramId, student: { academyId } },
    });
    if (!enrollment) throw new NotFoundException('Enrollment not found.');

    return this.prisma.payment.create({
      data: {
        ...dto,
        paidAt: new Date(dto.paidAt),
      },
    });
  }

  async findAll(studentProgramId: string, academyId: string) {
    const enrollment = await this.prisma.studentProgram.findFirst({
      where: { id: studentProgramId, student: { academyId } },
    });
    if (!enrollment) throw new NotFoundException('Enrollment not found.');

    return this.prisma.payment.findMany({
      where: { studentProgramId },
      orderBy: { paidAt: 'desc' },
    });
  }

  async remove(id: string, academyId: string) {
    const payment = await this.prisma.payment.findFirst({
      where: { id, studentProgram: { student: { academyId } } },
    });
    if (!payment) throw new NotFoundException('Payment not found.');
    await this.prisma.payment.delete({ where: { id } });
  }

  async getStudentPaymentPlan(studentId: string, academyId: string) {
    const student = await this.prisma.student.findFirst({
      where: { id: studentId, academyId },
      select: { id: true, name: true, surname: true },
    });
    if (!student) throw new NotFoundException('Student not found.');

    const enrollments = await this.prisma.studentProgram.findMany({
      where: { studentId, student: { academyId } },
      include: {
        payments: true,
        programLocation: {
          include: {
            program: { select: { id: true, name: true, endDate: true } },
            location: { select: { id: true, name: true } },
          },
        },
      },
    });

    type Line = {
      enrollmentId: string;
      programName: string;
      locationName: string;
      amount: number;
      dueDate: string;
      paid: boolean;
      isActive: boolean;
    };
    type MonthBucket = {
      monthKey: string;
      label: string;
      totalDue: number;
      totalPaid: number;
      lines: Line[];
    };

    const monthKey = (d: Date) =>
      `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`;
    const monthLabel = (d: Date) =>
      d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    const buckets = new Map<string, MonthBucket>();
    const upsert = (d: Date): MonthBucket => {
      const key = monthKey(d);
      let b = buckets.get(key);
      if (!b) {
        b = { monthKey: key, label: monthLabel(d), totalDue: 0, totalPaid: 0, lines: [] };
        buckets.set(key, b);
      }
      return b;
    };

    let totalExpected = 0;
    let totalPaid = 0;

    for (const e of enrollments) {
      const enrollmentTotalPaid = e.payments.reduce(
        (s, p) => (p.type === 'REFUND' ? s - p.amount : s + p.amount),
        0,
      );
      totalPaid += enrollmentTotalPaid;

      const programName = e.programLocation?.program?.name ?? '—';
      const locationName = e.programLocation?.location?.name ?? '—';

      let periods: BillingPeriod[] = [];
      if (
        e.priceKindSnapshot === PriceKind.MONTHLY &&
        e.monthlyBillingModeSnapshot &&
        e.basePriceSnapshot != null &&
        e.programLocation?.program?.endDate
      ) {
        const ds = e.discountSnapshot as { value: number; type: 'PERCENTAGE' | 'FLAT' } | null;
        periods = buildBillingPeriods({
          monthlyAmount: e.basePriceSnapshot,
          billingMode: e.monthlyBillingModeSnapshot,
          enrolledAt: e.enrolledAt,
          programEndDate: e.programLocation.program.endDate,
          discount: ds ? { value: ds.value, type: ds.type as any } : null,
        });
      } else if ((e.finalPrice ?? 0) > 0) {
        periods = [{
          label: monthLabel(e.enrolledAt),
          dueDate: e.enrolledAt.toISOString(),
          amount: e.finalPrice ?? 0,
        }];
      }

      let cumulativeDue = 0;
      for (const p of periods) {
        cumulativeDue += p.amount;
        const paid = enrollmentTotalPaid >= cumulativeDue - 0.01;
        const linePaidAmt = paid
          ? p.amount
          : Math.max(0, Math.min(p.amount, enrollmentTotalPaid - (cumulativeDue - p.amount)));

        const bucket = upsert(new Date(p.dueDate));
        bucket.totalDue += p.amount;
        bucket.totalPaid += linePaidAmt;
        bucket.lines.push({
          enrollmentId: e.id,
          programName,
          locationName,
          amount: parseFloat(p.amount.toFixed(2)),
          dueDate: p.dueDate,
          paid,
          isActive: e.isActive,
        });
        totalExpected += p.amount;
      }
    }

    const now = new Date();
    const months = Array.from(buckets.values())
      .sort((a, b) => a.monthKey.localeCompare(b.monthKey))
      .map((m) => {
        const totalDue = parseFloat(m.totalDue.toFixed(2));
        const totalPaidMonth = parseFloat(Math.min(m.totalPaid, totalDue).toFixed(2));
        const allPaid = m.lines.every((l) => l.paid);
        const nonePaid = m.lines.every((l) => !l.paid);
        const earliestDue = m.lines.reduce(
          (min, l) => (new Date(l.dueDate) < min ? new Date(l.dueDate) : min),
          new Date(m.lines[0].dueDate),
        );
        const isPast = earliestDue < now;
        let status: 'paid' | 'overdue' | 'upcoming' | 'partial';
        if (allPaid) status = 'paid';
        else if (nonePaid) status = isPast ? 'overdue' : 'upcoming';
        else status = 'partial';
        return { ...m, totalDue, totalPaid: totalPaidMonth, status };
      });

    return {
      studentId: student.id,
      studentName: `${student.name} ${student.surname}`,
      totalExpected: parseFloat(totalExpected.toFixed(2)),
      totalPaid: parseFloat(totalPaid.toFixed(2)),
      balance: parseFloat((totalExpected - totalPaid).toFixed(2)),
      months,
    };
  }

  async getBalance(studentProgramId: string, academyId: string) {
    const enrollment = await this.prisma.studentProgram.findFirst({
      where: { id: studentProgramId, student: { academyId } },
      include: {
        payments: true,
        programLocation: { include: { program: { select: { endDate: true } } } },
      },
    });
    if (!enrollment) throw new NotFoundException('Enrollment not found.');

    const totalPaid = enrollment.payments.reduce((sum, p) => {
      return p.type === 'REFUND' ? sum - p.amount : sum + p.amount;
    }, 0);

    const finalPrice = enrollment.finalPrice ?? 0;
    let monthlySchedule: BillingPeriod[] | undefined;
    let totalExpected = finalPrice;

    if (
      enrollment.priceKindSnapshot === PriceKind.MONTHLY &&
      enrollment.monthlyBillingModeSnapshot &&
      enrollment.basePriceSnapshot != null &&
      enrollment.programLocation?.program?.endDate
    ) {
      const ds = enrollment.discountSnapshot as { value: number; type: 'PERCENTAGE' | 'FLAT' } | null;
      monthlySchedule = buildBillingPeriods({
        monthlyAmount: enrollment.basePriceSnapshot,
        billingMode: enrollment.monthlyBillingModeSnapshot,
        enrolledAt: enrollment.enrolledAt,
        programEndDate: enrollment.programLocation.program.endDate,
        discount: ds ? { value: ds.value, type: ds.type as any } : null,
      });
      totalExpected = parseFloat(
        monthlySchedule.reduce((s, p) => s + p.amount, 0).toFixed(2),
      );
    }

    return {
      finalPrice,
      totalExpected,
      totalPaid,
      balance: totalExpected - totalPaid,
      monthlySchedule,
    };
  }
}
