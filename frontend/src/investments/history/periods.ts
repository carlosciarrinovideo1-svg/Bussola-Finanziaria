export type InvestmentPeriod = 6 | 12 | 24;

export const INVESTMENT_PERIODS: InvestmentPeriod[] = [
  6,
  12,
  24,
];

export function filterHistoryByPeriod<T extends { month: number }>(
  data: T[],
  period: InvestmentPeriod,
): T[] {
  return data.filter(
    item => item.month <= period,
  );
}
