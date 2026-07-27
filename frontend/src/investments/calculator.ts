import type {
  Investment,
} from "./types";

export interface InvestmentResult {
  initialCapital: number;
  finalValue: number;
  grossProfit: number;
}

export function calculateInvestment(
  investment: Investment
): InvestmentResult {
  const years =
    investment.durationMonths / 12;

  const rate =
    investment.annualGrossRate / 100;

  let finalValue =
    investment.initialCapital;

  if (
    investment.capitalization === "compound"
  ) {
    finalValue =
      investment.initialCapital *
      Math.pow(
        1 + rate,
        years
      );
  } else {
    finalValue =
      investment.initialCapital *
      (1 + rate * years);
  }

  return {
    initialCapital:
      investment.initialCapital,

    finalValue,

    grossProfit:
      finalValue -
      investment.initialCapital,
  };
}
