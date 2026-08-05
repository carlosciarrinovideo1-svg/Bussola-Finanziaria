export interface InvestmentHistoryPoint {
  month: number;
  value: number;
}

export interface InvestmentHistorySeries {
  name: string;
  points: InvestmentHistoryPoint[];
}
