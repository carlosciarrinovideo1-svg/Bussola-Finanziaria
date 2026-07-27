import type {
  Investment,
} from "../investments";

import {
  calculateInvestment,
} from "../investments";

import type {
  TaxRule,
} from "../taxation";

import {
  calculateTax,
} from "../taxation";

export interface FinancialEngineResult {
  initialCapital: number;
  finalValue: number;
  grossProfit: number;
  taxAmount: number;
  netProfit: number;
}

export function calculateFinancialEngine(
  investment: Investment,
  taxRule: TaxRule
): FinancialEngineResult {

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
    initialCapital:
      investmentResult.initialCapital,

    finalValue:
      investmentResult.finalValue,

    grossProfit:
      investmentResult.grossProfit,

    taxAmount:
      taxResult.taxAmount,

    netProfit:
      taxResult.netProfit,
  };
}
