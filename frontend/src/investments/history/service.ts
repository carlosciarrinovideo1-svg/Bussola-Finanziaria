import type { Investment } from "../types";
import type { InvestmentHistorySeries } from "./types";
import { createInvestmentHistory } from "./adapter";
import type { MarketSnapshot } from "../../services/marketService";
import {
  marketInvestmentProvider,
} from "./marketProvider";

export interface InvestmentHistoryProvider {
  getHistory(investments: Investment[]): InvestmentHistorySeries[];
}

const demoInvestmentHistoryProvider: InvestmentHistoryProvider = {
  getHistory(investments) {
    return investments.map((investment) =>
      createInvestmentHistory(
        investment,
        investment.name,
      ),
    );
  },
};

export function getInvestmentHistory(
  investments: Investment[],
  provider: InvestmentHistoryProvider = demoInvestmentHistoryProvider,
): InvestmentHistorySeries[] {
  return provider.getHistory(investments);
}


export function getInvestmentHistoryWithMarket(
  investments: Investment[],
  market: MarketSnapshot,
): InvestmentHistorySeries[] {
  return marketInvestmentProvider.getHistory(
    investments,
    market,
  );
}
