import {
  useState,
} from "react";

import Header from "./components/Header";

import Dashboard from "./components/Dashboard";

import ScenarioSelector from "./components/scenario/ScenarioSelector";

import ScenarioComparison from "./components/scenario/ScenarioComparison";

import {
  defaultScenarios,
} from "./scenarios";

import {
  loadScenarioComparison,
} from "./dashboard/comparison/comparisonService";

import {
  exampleTaxRule,
} from "./dashboard/demoDashboard";


function App() {

  const [selectedScenario, setSelectedScenario] =
    useState(
      defaultScenarios[0]
    );


  const comparisonData =
    loadScenarioComparison(
      defaultScenarios,
      exampleTaxRule,
    );


  return (
    <>
      <Header />

      <ScenarioSelector
        scenarios={defaultScenarios}
        selectedScenario={selectedScenario}
        onChange={setSelectedScenario}
      />

      <Dashboard
        scenario={selectedScenario}
      />

      <ScenarioComparison
        scenarios={comparisonData}
      />
    </>
  );
}

export default App;
