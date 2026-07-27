import type {
  Investment,
  InvestmentResult,
} from "../investments";

import {
  calculateInvestment,
} from "../investments";

import type {
  TaxRule,
  TaxResult,
} from "../taxation";

import {
  calculateTax,
} from "../taxation";

export interface InvestmentProjectionResult {
  investment: InvestmentResult;
  taxation: TaxResult;
  netValue: number;
}

export function calculateInvestmentProjection(
  investment: Investment,
  taxRule: TaxRule
): InvestmentProjectionResult {

  const investmentResult =
    calculateInvestment(
      investment
    );

  const taxResult =
    calculateTax(
      investmentResult.grossProfit,
      taxRule
    );

  return {
    investment:
      investmentResult,

    taxation:
      taxResult,

    netValue:
      investmentResult.initialCapital +
      taxResult.netProfit,
  };
}
