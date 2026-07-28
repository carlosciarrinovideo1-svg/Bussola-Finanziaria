import type {
  FinancialScenario,
} from "./types";

import {
  scenarioToInvestment,
} from "./scenarioService";

import type {
  TaxRule,
} from "../taxation";

import {
  calculateFinancialEngine,
} from "../services/financialEngineService";

export interface ScenarioEngineResult {
  scenario: FinancialScenario;
  financialResult:
    ReturnType<typeof calculateFinancialEngine>;
}

export function calculateScenario(
  scenario: FinancialScenario,
  taxRule: TaxRule
): ScenarioEngineResult {

  const investment =
    scenarioToInvestment(
      scenario
    );

  const financialResult =
    calculateFinancialEngine(
      investment,
      taxRule
    );

  return {
    scenario,
    financialResult,
  };
}
