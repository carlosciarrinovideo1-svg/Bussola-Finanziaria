import type {
  FinancialScenario,
} from "../scenarios";

import type {
  TaxRule,
} from "../taxation";

import {
  createDashboardResult,
} from "./dashboardEngine";

import {
  createDashboardViewModel,
} from "./viewModel";

import type {
  DashboardViewModel,
} from "./viewModel";


function buildDashboard(
  scenario: FinancialScenario,
  taxRule: TaxRule,
): DashboardViewModel {

  const dashboardResult =
    createDashboardResult(
      scenario,
      taxRule,
    );

  return createDashboardViewModel(
    dashboardResult,
  );
}


export function loadDashboard(
  scenario: FinancialScenario,
  taxRule: TaxRule,
): DashboardViewModel {

  return buildDashboard(
    scenario,
    taxRule,
  );
}


export function loadDashboards(
  scenarios: FinancialScenario[],
  taxRule: TaxRule,
): DashboardViewModel[] {

  return scenarios.map(
    scenario =>
      buildDashboard(
        scenario,
        taxRule,
      ),
  );
}
