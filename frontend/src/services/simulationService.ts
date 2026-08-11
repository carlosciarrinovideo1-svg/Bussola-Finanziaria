import type {
  MarketSnapshot,
} from "./marketService";

import {
  simulateInvestment,
} from "../investments/simulationProvider";

import type {
  SimulationInput,
  SimulationResult,
} from "../simulations/types";

export function runInvestmentSimulation(
  input: SimulationInput,
  market?: MarketSnapshot | null,
): SimulationResult {
  return simulateInvestment(
    input,
    market,
  );
}
