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
  benchmarkDifference: number | null;
}

export function compareInvestmentScenarios(
  input: Omit<SimulationInput, "annualRate">,
  benchmarkRate?: number | null,
): ScenarioComparisonResult[] {
  const benchmarkResult =
    benchmarkRate !== null &&
    benchmarkRate !== undefined
      ? calculateInvestment({
          ...input,
          annualRate: benchmarkRate,
        })
      : null;

  return simulationScenarios.map((scenario) => {
    const simulationInput: SimulationInput = {
      ...input,
      annualRate: scenario.annualRate,
    };

    const result = calculateInvestment(simulationInput);

    return {
      scenarioId: scenario.id,
      scenarioName: scenario.name,
      description: scenario.description,
      annualRate: scenario.annualRate,
      result,
      benchmarkDifference:
        benchmarkResult !== null
          ? result.finalValue - benchmarkResult.finalValue
          : null,
    };
  });
}