import {
  simulationScenarios,
} from "./config";

import {
  calculateInvestment,
} from "./investmentCalculator";

import type {
  SimulationInput,
  SimulationResult,
} from "./types";

export interface ScenarioComparisonResult {
  scenarioId: string;
  scenarioName: string;
  description: string;
  annualRate: number;
  result: SimulationResult;
}

export function compareInvestmentScenarios(
  input: Omit<SimulationInput, "annualRate">
): ScenarioComparisonResult[] {
  return simulationScenarios.map((scenario) => {
    const simulationInput: SimulationInput = {
      ...input,
      annualRate: scenario.annualRate,
    };

    return {
      scenarioId: scenario.id,
      scenarioName: scenario.name,
      description: scenario.description,
      annualRate: scenario.annualRate,
      result: calculateInvestment(simulationInput),
    };
  });
}