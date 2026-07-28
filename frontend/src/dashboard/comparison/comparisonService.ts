import type {
  FinancialScenario,
} from "../../scenarios";

import type {
  TaxRule,
} from "../../taxation";

import {
  loadDashboards,
} from "../dashboardService";

import {
  createScenarioComparisonViewModel,
} from "./scenarioComparisonViewModel";


export function loadScenarioComparison(
  scenarios: FinancialScenario[],
  taxRule: TaxRule,
) {

  const dashboards =
    loadDashboards(
      scenarios,
      taxRule,
    );

  return createScenarioComparisonViewModel(
    dashboards,
  );

}
