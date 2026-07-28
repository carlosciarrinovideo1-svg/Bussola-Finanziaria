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


export function loadDashboard(
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
