import type {
  TaxRule,
} from "./types";

export interface TaxResult {
  grossProfit: number;
  taxAmount: number;
  netProfit: number;
}

export function calculateTax(
  grossProfit: number,
  taxRule: TaxRule
): TaxResult {
  const taxAmount =
    grossProfit *
    (taxRule.taxRate / 100);

  return {
    grossProfit,

    taxAmount,

    netProfit:
      grossProfit - taxAmount,
  };
}
