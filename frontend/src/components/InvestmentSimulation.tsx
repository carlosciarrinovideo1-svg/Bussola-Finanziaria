import { useEffect, useState } from "react";
import { runInvestmentSimulation } from "../services/simulationService";
import type { SimulationResult } from "../simulations/types";
import {
  simulationScenarios,
} from "../simulations/config";

function InvestmentSimulation() {
  const defaultScenario = simulationScenarios[1];

  const [selectedScenarioId, setSelectedScenarioId] =
    useState(defaultScenario.id);

  const [initialCapital, setInitialCapital] =
    useState(10000);

  const [monthlyContribution, setMonthlyContribution] =
    useState(500);

  const [years, setYears] =
    useState(10);

  const [annualRate, setAnnualRate] =
    useState(defaultScenario.annualRate);

  const [result, setResult] =
    useState<SimulationResult | null>(null);

  useEffect(() => {
    const scenario = simulationScenarios.find(
      (item) => item.id === selectedScenarioId
    );

    if (scenario) {
      setAnnualRate(scenario.annualRate);
    }
  }, [selectedScenarioId]);

  function calculate() {
    const simulation = runInvestmentSimulation({
      initialCapital,
      monthlyContribution,
      years,
      annualRate,
    });

    setResult(simulation);
  }

  const selectedScenario =
    simulationScenarios.find(
      (item) => item.id === selectedScenarioId
    );

  return (
    <section>
      <h2>📊 Simulazione investimento</h2>

      <label>
        Scenario

        <select
          value={selectedScenarioId}
          onChange={(e) =>
            setSelectedScenarioId(e.target.value)
          }
        >
          {simulationScenarios.map((scenario) => (
            <option
              key={scenario.id}
              value={scenario.id}
            >
              {scenario.name}
            </option>
          ))}
        </select>
      </label>

      {selectedScenario && (
        <p>
          {selectedScenario.description}
        </p>
      )}

      <br />

      <label>
        Capitale iniziale (€)

        <input
          type="number"
          value={initialCapital}
          onChange={(e) =>
            setInitialCapital(Number(e.target.value))
          }
        />
      </label>

      <br />

      <label>
        Versamento mensile (€)

        <input
          type="number"
          value={monthlyContribution}
          onChange={(e) =>
            setMonthlyContribution(Number(e.target.value))
          }
        />
      </label>

      <br />

      <label>
        Anni

        <input
          type="number"
          value={years}
          onChange={(e) =>
            setYears(Number(e.target.value))
          }
        />
      </label>

      <br />

      <label>
        Rendimento annuo (%)

        <input
          type="number"
          value={annualRate}
          readOnly
        />
      </label>

      <br />

      <button onClick={calculate}>
        Calcola
      </button>

      {result && (
        <div>
          <h3>Risultato</h3>

          <p>
            Totale investito: €
            {result.totalInvested.toFixed(2)}
          </p>

          <p>
            Profitto: €
            {result.profit.toFixed(2)}
          </p>

          <p>
            Valore finale: €
            {result.finalValue.toFixed(2)}
          </p>
        </div>
      )}
    </section>
  );
}

export default InvestmentSimulation;
