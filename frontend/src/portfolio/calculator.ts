import type {
  Portfolio,
} from "./types";

export interface PortfolioResult {
  totalCapital: number;
  investedCapital: number;
  expectedAnnualReturn: number;
  expectedProfit: number;
  finalValue: number;
}

export function calculatePortfolio(
  portfolio: Portfolio
): PortfolioResult {
  let expectedProfit = 0;

  portfolio.assets.forEach((asset) => {
    const assetCapital =
      portfolio.totalCapital *
      (asset.allocation / 100);

    expectedProfit +=
      assetCapital *
      (asset.expectedAnnualRate / 100);
  });

  return {
    totalCapital: portfolio.totalCapital,
    investedCapital: portfolio.totalCapital,
    expectedAnnualReturn:
      (expectedProfit / portfolio.totalCapital) * 100,
    expectedProfit,
    finalValue:
      portfolio.totalCapital + expectedProfit,
  };
}
