import {
  createDashboardResult,
} from "./dashboardEngine";

import {
  defaultScenarios,
} from "../scenarios";

import type {
  TaxRule,
} from "../taxation";


export function createExampleDashboard() {

  const scenario =
    defaultScenarios[0];

  const taxRule: TaxRule = {
    id: "dashboard-tax-example",
    name: "Regola fiscale esempio",
    country: "BR",
    minimumDurationMonths: 0,
    taxRate: 15,
  };


  return createDashboardResult(
    scenario,
    taxRule
  );
}
