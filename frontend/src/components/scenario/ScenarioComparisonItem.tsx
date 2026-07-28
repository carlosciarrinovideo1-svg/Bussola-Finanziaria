import type {
  ScenarioComparisonItem as ScenarioComparisonItemModel,
} from "./scenarioComparisonModel";

import FinancialCard from "../dashboard/FinancialCard";


interface ScenarioComparisonItemProps {

  item: ScenarioComparisonItemModel;

}


export default function ScenarioComparisonItem({
  item,
}: ScenarioComparisonItemProps) {

  return (

    <div>

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

  );
}
