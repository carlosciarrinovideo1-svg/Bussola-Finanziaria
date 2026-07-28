import {
  useState,
} from "react";

import Header from "./components/Header";

import Dashboard from "./components/Dashboard";

import ScenarioSelector from "./components/scenario/ScenarioSelector";

import {
  defaultScenarios,
} from "./scenarios";


function App() {

  const [selectedScenario, setSelectedScenario] =
    useState(
      defaultScenarios[0]
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
    </>
  );
}

export default App;
