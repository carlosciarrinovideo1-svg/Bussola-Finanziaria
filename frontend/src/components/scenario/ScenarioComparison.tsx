import type {
  ScenarioComparisonViewModel,
} from "../../dashboard/comparison/scenarioComparisonViewModel";

import DashboardSection from "../dashboard/DashboardSection";

import ScenarioComparisonItem from "./ScenarioComparisonItem";


interface ScenarioComparisonProps {

  scenarios: ScenarioComparisonViewModel[];

}


export default function ScenarioComparison({
  scenarios,
}: ScenarioComparisonProps) {

  return (

    <DashboardSection title="Confronto scenari">

      {scenarios.map(
        scenario => (

          <ScenarioComparisonItem
            key={scenario.scenarioName}
            scenario={scenario}
          />

        )
      )}

    </DashboardSection>

  );
}
