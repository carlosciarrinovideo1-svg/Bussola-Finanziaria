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

export const marketInvestmentSimulationProvider:
  InvestmentSimulationProvider = {
    simulate(input) {
      return calculateInvestment(input);
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
