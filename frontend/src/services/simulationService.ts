import { calculateInvestment } from "../simulations/investmentCalculator";
import type {
  SimulationInput,
  SimulationResult,
} from "../simulations/types";

export function runInvestmentSimulation(
  input: SimulationInput
): SimulationResult {
  return calculateInvestment(input);
}
