import type {
  ScenarioComparisonViewModel,
} from "../../dashboard/comparison/scenarioComparisonViewModel";

import FinancialCard from "../dashboard/FinancialCard";


interface ScenarioComparisonItemProps {

  scenario: ScenarioComparisonViewModel;

}


export default function ScenarioComparisonItem({
  scenario,
}: ScenarioComparisonItemProps) {

  return (

    <div>

      <h3>
        {scenario.scenarioName}
      </h3>

      <p>
        {scenario.description}
      </p>

      <p>
        Rendimento ipotetico annuo:
        {" "}
        {scenario.expectedAnnualRate}%
      </p>

      <FinancialCard
        label="Valore finale"
        value={scenario.finalValue}
      />

      <FinancialCard
        label="Profitto netto"
        value={scenario.netProfit}
      />

    </div>

  );
}
