export type RealEstateStrategy = "rental" | "flip";

export interface RealEstateInvestment {
  purchasePrice: number;
  monthlyRent: number;
  annualPropertyTax: number;
  annualMaintenance: number;
  expectedAnnualAppreciation: number;
  strategy: RealEstateStrategy;
}
