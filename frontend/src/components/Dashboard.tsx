import {
  loadDashboard,
} from "../dashboard/dashboardService";

import type {
  TaxRule,
} from "../taxation";

import DashboardSummary from "./dashboard/DashboardSummary";


const exampleTaxRule: TaxRule = {
  id: "dashboard-tax-example",
  name: "Regola fiscale esempio",
  country: "BR",
  minimumDurationMonths: 0,
  taxRate: 15,
};


export default function Dashboard() {

  const data =
    loadDashboard(
      exampleTaxRule
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
