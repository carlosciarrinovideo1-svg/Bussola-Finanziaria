import type { RealEstateInvestment } from "./types";

export interface RealEstateResult {
  grossYield: number;
  netAnnualIncome: number;
  paybackYears: number;
}

export function calculateRealEstate(
  investment: RealEstateInvestment,
): RealEstateResult {

  const grossAnnualRent = investment.monthlyRent * 12;

  const netAnnualIncome =
    grossAnnualRent -
    investment.annualPropertyTax -
    investment.annualMaintenance;

  return {
    grossYield:
      (grossAnnualRent / investment.purchasePrice) * 100,
    netAnnualIncome,
    paybackYears:
      investment.purchasePrice / Math.max(netAnnualIncome, 1),
  };
}
