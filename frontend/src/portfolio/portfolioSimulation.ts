import type {
  Portfolio,
} from "./types";

import {
  calculatePortfolio,
} from "./calculator";


export interface PortfolioSimulationResult {
  months: number;
  initialCapital: number;
  finalValue: number;
  profit: number;
}


export function simulatePortfolio(
  portfolio: Portfolio,
  months: number[]
): PortfolioSimulationResult[] {

  const portfolioResult =
    calculatePortfolio(portfolio);

  const annualRate =
    portfolioResult.expectedAnnualReturn / 100;

  return months.map((month) => {

    const years =
      month / 12;

    const finalValue =
      portfolio.totalCapital *
      Math.pow(
        1 + annualRate,
        years
      );

    return {
      months: month,
      initialCapital: portfolio.totalCapital,
      finalValue,
      profit:
        finalValue - portfolio.totalCapital,
    };
  });
}
