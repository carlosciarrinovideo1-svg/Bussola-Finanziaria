import {
  loadDashboard,
} from "../dashboard/dashboardService";

import {
  exampleTaxRule,
} from "../dashboard/demoDashboard";

import DashboardSummary from "./dashboard/DashboardSummary";


export default function Dashboard() {

  const data =
    loadDashboard(
      exampleTaxRule
    );


  return (

    <DashboardSummary

      title={data.title}

      scenarioName={data.scenarioName}

      initialCapital={Number(
        data.initialCapital
      )}

      finalValue={Number(
        data.finalValue
      )}

      grossProfit={Number(
        data.grossProfit
      )}

      taxAmount={Number(
        data.taxAmount
      )}

      netProfit={Number(
        data.netProfit
      )}

      suggestions={
        data.suggestions
      }

    />

  );
}
