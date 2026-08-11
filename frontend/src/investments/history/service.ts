import type { Investment } from "../types";
import type { InvestmentHistorySeries } from "./types";
import { createInvestmentHistory } from "./adapter";

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
