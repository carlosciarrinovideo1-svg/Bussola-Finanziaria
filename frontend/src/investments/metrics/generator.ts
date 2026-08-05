import {
  calculateInvestment,
} from "../calculator";

import type {
  Investment,
} from "../types";

import type {
  InvestmentDecisionMetrics,
} from "./types";


export function generateInvestmentMetrics(
  investment: Investment,
): InvestmentDecisionMetrics {

  const result = calculateInvestment(investment);

  return {
    name: investment.name,
    initialCapital: result.initialCapital,
    finalValue: result.finalValue,
    grossProfit: result.grossProfit,
    returnPercentage:
      (result.grossProfit / result.initialCapital) * 100,
    risk:
      investment.durationMonths <= 12
        ? "basso"
        : investment.durationMonths <= 24
          ? "medio"
          : "alto",

    liquidity:
      investment.durationMonths <= 12
        ? "alta"
        : investment.durationMonths <= 24
          ? "media"
          : "bassa",
  };
}
