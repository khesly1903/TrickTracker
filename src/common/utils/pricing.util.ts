import { PriceKind, DiscountType, MonthlyBillingMode } from '@prisma/client';

export interface PricingInput {
  amount: number;
  kind: PriceKind;
  sessionsCovered?: number | null;
  totalProgramSessions?: number;
  remainingSessions?: number;
  overrideBasePrice?: number;
}

export interface DiscountInput {
  value: number;
  type: DiscountType;
}

export interface MonthlyBillingInput {
  monthlyAmount: number;
  billingMode: MonthlyBillingMode;
  enrolledAt: Date;
  programEndDate: Date;
  discount?: DiscountInput | null;
}

export interface BillingPeriod {
  label: string;
  dueDate: string;
  amount: number;
}

export function derivePerSession(amount: number, kind: PriceKind, sessionsCovered: number): number {
  if (kind === PriceKind.MONTHLY && sessionsCovered > 0) return amount / sessionsCovered;
  if (kind === PriceKind.WALK_IN) return amount;
  if (kind === PriceKind.FULL_PROGRAM && sessionsCovered > 0) return amount / sessionsCovered;
  return amount;
}

export function calculateBaseTotal(input: PricingInput): number {
  const { amount, kind, sessionsCovered, remainingSessions, overrideBasePrice } = input;

  if (overrideBasePrice !== undefined && overrideBasePrice !== null) return overrideBasePrice;

  if (kind === PriceKind.WALK_IN) return amount;
  if (kind === PriceKind.CUSTOM) return amount;
  if (kind === PriceKind.MONTHLY) return amount;

  if (kind === PriceKind.FULL_PROGRAM && remainingSessions != null && sessionsCovered) {
    const perSession = derivePerSession(amount, kind, sessionsCovered);
    return perSession * remainingSessions;
  }

  return amount;
}

export function applyDiscount(baseTotal: number, discount: DiscountInput | null | undefined): number {
  if (!discount) return baseTotal;
  if (discount.type === DiscountType.PERCENTAGE) {
    return baseTotal * (1 - discount.value / 100);
  }
  return Math.max(0, baseTotal - discount.value);
}

export function calculateFinalPrice(input: PricingInput, discount?: DiscountInput | null): number {
  const base = calculateBaseTotal(input);
  return applyDiscount(base, discount);
}

export function buildBillingPeriods(input: MonthlyBillingInput): BillingPeriod[] {
  const { monthlyAmount, billingMode, enrolledAt, programEndDate, discount } = input;
  const perMonth = parseFloat(applyDiscount(monthlyAmount, discount).toFixed(2));
  const periods: BillingPeriod[] = [];

  if (billingMode === MonthlyBillingMode.MONTH_BASED) {
    const cur = new Date(Date.UTC(enrolledAt.getUTCFullYear(), enrolledAt.getUTCMonth(), 1));
    const end = new Date(Date.UTC(programEndDate.getUTCFullYear(), programEndDate.getUTCMonth(), 1));
    let i = 0;
    while (cur <= end) {
      periods.push({
        label: cur.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        dueDate: (i === 0 ? enrolledAt : cur).toISOString(),
        amount: perMonth,
      });
      cur.setUTCMonth(cur.getUTCMonth() + 1);
      i++;
    }
  } else {
    const due = new Date(enrolledAt);
    while (due <= programEndDate) {
      periods.push({
        label: due.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        dueDate: due.toISOString(),
        amount: perMonth,
      });
      due.setUTCMonth(due.getUTCMonth() + 1);
    }
  }
  return periods;
}
