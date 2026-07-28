import {
  loadDashboard,
} from "../dashboard/dashboardService";

import {
  exampleTaxRule,
} from "../dashboard/demoDashboard";

import {
  defaultScenarios,
} from "../scenarios";

import DashboardSummary from "./dashboard/DashboardSummary";


export default function Dashboard() {

  const data =
    loadDashboard(
      defaultScenarios[0],
      exampleTaxRule,
    );

  return (

    <DashboardSummary
      title={data.title}
      scenarioName={data.scenarioName}
      initialCapital={data.initialCapital}
      finalValue={data.finalValue}
      grossProfit={data.grossProfit}
      taxAmount={data.taxAmount}
      netProfit={data.netProfit}
      suggestions={data.suggestions}
    />

  );
}
