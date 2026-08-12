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
  benchmarkFinalValue: number | null;
  benchmarkDifference: number | null;
  benchmarkDifferencePercent: number | null;
  benchmarkPosition: "above" | "equal" | "below" | null;
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
      benchmarkFinalValue:
        benchmarkResult !== null
          ? benchmarkResult.finalValue
          : null,

      benchmarkDifference:
        benchmarkResult !== null
          ? result.finalValue - benchmarkResult.finalValue
          : null,

      benchmarkDifferencePercent:
        benchmarkResult !== null &&
        benchmarkResult.finalValue !== 0
          ? ((result.finalValue - benchmarkResult.finalValue) /
              benchmarkResult.finalValue) *
            100
          : null,

      benchmarkPosition:
        benchmarkResult === null
          ? null
          : result.finalValue > benchmarkResult.finalValue
            ? "above"
            : result.finalValue < benchmarkResult.finalValue
              ? "below"
              : "equal",
    };
  });
}