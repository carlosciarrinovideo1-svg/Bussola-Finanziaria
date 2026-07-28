import type {
  FinancialScenario,
} from "../scenarios";

import {
  calculateScenario,
} from "../scenarios/scenarioEngine";

import type {
  TaxRule,
} from "../taxation";

import {
  generateAdvisorSuggestions,
} from "../advisor/advisorEngine";

import type {
  DashboardResult,
} from "./types";


export function createDashboardResult(
  scenario: FinancialScenario,
  taxRule: TaxRule
): DashboardResult {

  const scenarioResult =
    calculateScenario(
      scenario,
      taxRule
    );

  const suggestions =
    generateAdvisorSuggestions(
      scenarioResult.financialResult
    );


  return {
    scenarioName:
      scenario.name,

    initialCapital:
      scenarioResult.financialResult.initialCapital,

    finalValue:
      scenarioResult.financialResult.finalValue,

    grossProfit:
      scenarioResult.financialResult.grossProfit,

    taxAmount:
      scenarioResult.financialResult.taxAmount,

    netProfit:
      scenarioResult.financialResult.netProfit,

    suggestionsCount:
      suggestions.length,
  };
}
