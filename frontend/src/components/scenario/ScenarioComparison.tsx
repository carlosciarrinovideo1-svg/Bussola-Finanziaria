import type {
  DashboardViewModel,
} from "../../dashboard";

import DashboardSection from "../dashboard/DashboardSection";

import {
  createScenarioComparisonItems,
} from "./scenarioComparisonModel";

import ScenarioComparisonItem from "./ScenarioComparisonItem";


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

          <ScenarioComparisonItem
            key={item.scenarioName}
            item={item}
          />

        )
      )}

    </DashboardSection>

  );
}
