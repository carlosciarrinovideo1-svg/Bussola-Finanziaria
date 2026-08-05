import type {
  Portfolio,
} from "./types";


export interface PortfolioRiskResult {
  riskLevel: string;
  riskScore: number;
  expectedReturn: number;
  riskReturnRatio: number;
}


export function calculatePortfolioRisk(
  portfolio: Portfolio
): PortfolioRiskResult {

  let weightedRisk = 0;
  let weightedReturn = 0;

  portfolio.assets.forEach((asset) => {

    const weight =
      asset.allocation / 100;

    weightedReturn +=
      asset.expectedAnnualRate * weight;

    let assetRisk = 0;

    if (asset.expectedAnnualRate <= 8) {
      assetRisk = 1;
    } else if (asset.expectedAnnualRate <= 12) {
      assetRisk = 2;
    } else {
      assetRisk = 3;
    }

    weightedRisk +=
      assetRisk * weight;
  });


  let riskLevel = "Conservativo";

  if (weightedRisk > 1.8 && weightedRisk <= 2.4) {
    riskLevel = "Moderato";
  }

  if (weightedRisk > 2.4) {
    riskLevel = "Alto";
  }


  return {
    riskLevel,
    riskScore: Number(weightedRisk.toFixed(2)),
    expectedReturn: Number(weightedReturn.toFixed(2)),
    riskReturnRatio:
      Number((weightedReturn / weightedRisk).toFixed(2)),
  };
}
