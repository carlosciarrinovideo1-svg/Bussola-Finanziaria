import type {
  FinancialScenario,
} from "../../scenarios";


interface ScenarioSelectorProps {

  scenarios: FinancialScenario[];

  selectedScenario: FinancialScenario;

  onChange: (
    scenario: FinancialScenario
  ) => void;

}


export default function ScenarioSelector({
  scenarios,
  selectedScenario,
  onChange,
}: ScenarioSelectorProps) {

  return (

    <select
      value={selectedScenario.id}
      onChange={(event) => {

        const scenario =
          scenarios.find(
            item =>
              item.id === event.target.value
          );

        if (scenario) {
          onChange(scenario);
        }

      }}
    >

      {scenarios.map(
        scenario => (

          <option
            key={scenario.id}
            value={scenario.id}
          >
            {scenario.name}
          </option>

        )
      )}

    </select>

  );
}
