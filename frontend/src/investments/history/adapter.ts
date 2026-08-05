import {
  calculateInvestment,
} from "../calculator";

import type {
  Investment,
} from "../types";

import type {
  InvestmentHistorySeries,
} from "./types";


export function createInvestmentHistory(
  investment: Investment,
  name: string,
): InvestmentHistorySeries {

  const result =
    calculateInvestment(investment);

  const points =
    [0, 6, 12, 24]
      .filter(
        month =>
          month <= investment.durationMonths
      )
      .map(month => {

        const progress =
          month / investment.durationMonths;

        const value =
          investment.initialCapital +
          (
            result.grossProfit *
            progress
          );

        return {
          month,
          value,
        };
      });

  return {
    name,
    points,
  };
}
