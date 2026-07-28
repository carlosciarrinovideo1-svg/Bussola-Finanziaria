import {
  defaultScenarios,
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
  taxRule: TaxRule
): DashboardViewModel {

  const scenario =
    defaultScenarios[0];


  const dashboardResult =
    createDashboardResult(
      scenario,
      taxRule
    );


  return createDashboardViewModel(
    dashboardResult
  );
}
