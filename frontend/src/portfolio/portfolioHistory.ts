import {
  simulatePortfolio,
} from "./portfolioSimulation";

import type {
  Portfolio,
} from "./types";


export interface PortfolioHistoryPoint {
  months: number;
  value: number;
  growth: number;
}


export function generatePortfolioHistory(
  portfolio: Portfolio,
): PortfolioHistoryPoint[] {

  const initialValue =
    portfolio.totalCapital;

  return simulatePortfolio(
    portfolio,
    [6, 12, 24]
  ).map((item) => ({
    months: item.months,
    value: item.finalValue,
    growth:
      ((item.finalValue - initialValue) /
        initialValue) * 100,
  }));
}
