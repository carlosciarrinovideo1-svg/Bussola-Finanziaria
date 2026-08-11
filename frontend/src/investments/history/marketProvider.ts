import type { Investment } from "../types";
import type { InvestmentHistorySeries } from "./types";
import type { MarketSnapshot } from "../../services/marketService";
import { createInvestmentHistory } from "./adapter";

export interface MarketInvestmentProvider {
  getHistory(
    investments: Investment[],
    market: MarketSnapshot,
  ): InvestmentHistorySeries[];
}

function getReferenceRate(
  investment: Investment,
  market: MarketSnapshot,
): number | null {
  const name = investment.name.toLowerCase();

  if (name.includes("portfolio")) {
    return market.cdi.value;
  }

  return null;
}

export const marketInvestmentProvider: MarketInvestmentProvider = {
  getHistory(investments, market) {
    return investments.map((investment) => {
      const referenceRate = getReferenceRate(
        investment,
        market,
      );

      if (referenceRate === null) {
        return createInvestmentHistory(
          investment,
          investment.name,
        );
      }

      return createInvestmentHistory(
        {
          ...investment,
          annualGrossRate: referenceRate,
        },
        investment.name,
      );
    });
  },
};
