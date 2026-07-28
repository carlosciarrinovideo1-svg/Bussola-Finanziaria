import type {
  FinancialScenario,
} from "../scenarios";

import {
  calculateScenario,
} from "../scenarios";

import type {
  TaxRule,
} from "../taxation";

import {
  generateAdvisorSuggestions,
} from "../advisor";

import type {
  DashboardResult,
} from "./types";


export function createDashboardResult(
  scenario: FinancialScenario,
  taxRule: TaxRule
): DashboardResult {

  const financial =
    calculateScenario(
      scenario,
      taxRule
    ).financialResult;


  const suggestions =
    generateAdvisorSuggestions(
      financial
    );


  return {
    scenario,

    financial,

    suggestions,
  };
}
