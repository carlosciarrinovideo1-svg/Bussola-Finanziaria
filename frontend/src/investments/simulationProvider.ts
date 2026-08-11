import type { MarketSnapshot } from "../services/marketService";
import {
  calculateInvestment,
} from "../simulations/investmentCalculator";
import type {
  SimulationInput,
  SimulationResult,
} from "../simulations/types";

export interface InvestmentSimulationProvider {
  simulate(
    input: SimulationInput,
    market?: MarketSnapshot | null,
  ): SimulationResult;
}

function getMarketRate(
  market?: MarketSnapshot | null,
): number | null {
  if (!market || market.cdi.status !== "ok") {
    return null;
  }

  return market.cdi.value;
}

export const marketInvestmentSimulationProvider:
  InvestmentSimulationProvider = {
    simulate(input, market) {
      const marketRate = getMarketRate(market);

      if (marketRate === null) {
        return calculateInvestment(input);
      }

      return calculateInvestment({
        ...input,
        annualRate: marketRate,
      });
    },
  };

export function simulateInvestment(
  input: SimulationInput,
  market?: MarketSnapshot | null,
): SimulationResult {
  return marketInvestmentSimulationProvider.simulate(
    input,
    market,
  );
}
