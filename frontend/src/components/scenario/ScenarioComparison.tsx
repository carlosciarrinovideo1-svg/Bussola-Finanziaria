import type {
  DashboardViewModel,
} from "../../dashboard";

import DashboardSection from "../dashboard/DashboardSection";

import FinancialCard from "../dashboard/FinancialCard";


interface ScenarioComparisonProps {

  dashboards: DashboardViewModel[];

}


export default function ScenarioComparison({
  dashboards,
}: ScenarioComparisonProps) {

  return (

    <DashboardSection title="Confronto scenari">

      {dashboards.map(
        dashboard => (

          <div key={dashboard.scenarioName}>

            <h3>
              {dashboard.scenarioName}
            </h3>

            <FinancialCard
              label="Valore finale"
              value={dashboard.finalValue}
            />

            <FinancialCard
              label="Profitto netto"
              value={dashboard.netProfit}
            />

          </div>

        )
      )}

    </DashboardSection>

  );
}
