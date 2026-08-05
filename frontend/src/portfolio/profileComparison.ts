import {
  portfolioProfiles,
  portfolioProfileIds,
} from "./profiles";

import {
  calculatePortfolio,
} from "./calculator";

import {
  calculatePortfolioRisk,
} from "./riskCalculator";

import {
  simulatePortfolio,
} from "./portfolioSimulation";


export interface PortfolioComparisonResult {
  profileId: string;
  name: string;
  expectedReturn: number;
  riskLevel: string;
  riskReturnRatio: number;
  projections: {
    months: number;
    finalValue: number;
  }[];
}


export function comparePortfolioProfiles(): PortfolioComparisonResult[] {

  return portfolioProfileIds.map((profileId) => {

    const portfolio =
      portfolioProfiles[profileId];

    const calculation =
      calculatePortfolio(portfolio);

    const risk =
      calculatePortfolioRisk(portfolio);

    const projections =
      simulatePortfolio(
        portfolio,
        [6, 12, 24]
      ).map((item) => ({
        months: item.months,
        finalValue: item.finalValue,
      }));


    return {
      profileId,
      name: portfolio.name,
      expectedReturn:
        calculation.expectedAnnualReturn,
      riskLevel:
        risk.riskLevel,
      riskReturnRatio:
        risk.riskReturnRatio,
      projections,
    };
  });
}
