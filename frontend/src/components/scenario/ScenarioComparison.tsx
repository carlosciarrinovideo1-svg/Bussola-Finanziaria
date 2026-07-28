import type {
  DashboardViewModel,
} from "../../dashboard";

import DashboardSection from "../dashboard/DashboardSection";

import FinancialCard from "../dashboard/FinancialCard";

import {
  createScenarioComparisonItems,
} from "./scenarioComparisonModel";


interface ScenarioComparisonProps {

  dashboards: DashboardViewModel[];

}


export default function ScenarioComparison({
  dashboards,
}: ScenarioComparisonProps) {

  const items =
    createScenarioComparisonItems(
      dashboards,
    );


  return (

    <DashboardSection title="Confronto scenari">

      {items.map(
        item => (

          <div key={item.scenarioName}>

            <h3>
              {item.scenarioName}
            </h3>

            <FinancialCard
              label="Valore finale"
              value={item.finalValue}
            />

            <FinancialCard
              label="Profitto netto"
              value={item.netProfit}
            />

          </div>

        )
      )}

    </DashboardSection>

  );
}
