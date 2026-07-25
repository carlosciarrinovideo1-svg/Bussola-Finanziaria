import { useState } from "react";
import { runInvestmentSimulation } from "../services/simulationService";
import type { SimulationResult } from "../simulations/types";

function InvestmentSimulation() {
  const [initialCapital, setInitialCapital] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [years, setYears] = useState(10);
  const [annualRate, setAnnualRate] = useState(10);

  const [result, setResult] =
    useState<SimulationResult | null>(null);

  function calculate() {
    const simulation = runInvestmentSimulation({
      initialCapital,
      monthlyContribution,
      years,
      annualRate,
    });

    setResult(simulation);
  }

  return (
    <section>
      <h2>📊 Simulazione investimento</h2>

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
          onChange={(e) =>
            setAnnualRate(Number(e.target.value))
          }
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
