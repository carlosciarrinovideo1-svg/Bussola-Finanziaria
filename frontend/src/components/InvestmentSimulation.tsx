import { useState } from "react";
import { runInvestmentSimulation } from "../services/simulationService";

import {
  calculatePortfolio,
  getPortfolio,
} from "../portfolio";

import type {
  MarketSnapshot,
} from "../services/marketService";
import type { SimulationResult } from "../simulations/types";
import {
  compareInvestmentScenarios,
} from "../simulations/scenarioComparison";
import type {
  ScenarioComparisonResult,
} from "../simulations/scenarioComparison";

interface InvestmentSimulationProps {
  profileId?: string;
  market?: MarketSnapshot | null;
}

function InvestmentSimulation({
  profileId = "balanced",
  market = null,
}: InvestmentSimulationProps) {
  const selectedPortfolio =
    getPortfolio(profileId);

  const portfolioResult =
    calculatePortfolio(selectedPortfolio);

  const [initialCapital, setInitialCapital] =
    useState(selectedPortfolio.totalCapital);

  const [monthlyContribution, setMonthlyContribution] =
    useState(500);

  const [years, setYears] =
    useState(2);

  const annualRate =
    portfolioResult.expectedAnnualReturn;

  const [result, setResult] =
    useState<SimulationResult | null>(null);

  const [comparisonResults, setComparisonResults] =
    useState<ScenarioComparisonResult[]>([]);

  const effectiveAnnualRate = annualRate;

  const rateSource =
    annualRate === portfolioResult.expectedAnnualReturn
      ? "Profilo portafoglio selezionato"
      : "Scenario selezionato";

  function calculate() {
    const simulation = runInvestmentSimulation(
      {
        initialCapital,
        monthlyContribution,
        years,
        annualRate,
      },
      market,
    );

    setResult(simulation);
  }

  function compareScenarios() {
    const comparison = compareInvestmentScenarios(
      {
        initialCapital,
        monthlyContribution,
        years,
      },
      market?.cdi.status === "ok"
        ? market.cdi.value
        : null,
    );

    setComparisonResults(comparison);
  }

  return (
    <section>
      <h2>📊 Simulazione investimento</h2>

      <p>
        <strong>Profilo portafoglio:</strong>{" "}
        {selectedPortfolio.name}
      </p>

      <p>
        Capitale del profilo: R${" "}
        {selectedPortfolio.totalCapital.toFixed(2)}
      </p>

      <p>
        Il rendimento utilizzato nella simulazione deriva
        dal profilo di portafoglio selezionato.
      </p>

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
        Rendimento annuo effettivo (%)

        <input
          type="number"
          value={effectiveAnnualRate}
          readOnly
        />
      </label>

      <p>
        <strong>Fonte del rendimento:</strong>{" "}
        {rateSource}
      </p>

      <p>
        Il calcolo utilizza il rendimento dello scenario
        selezionato. Il CDI corrente viene utilizzato
        separatamente come benchmark di mercato.
      </p>

      <br />

      <button onClick={calculate}>
        Calcola
      </button>

      <button onClick={compareScenarios}>
        Confronta scenari
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

      {comparisonResults.length > 0 && (
        <div>
          <h3>📊 Confronto scenari</h3>

          {market?.cdi.status === "ok" &&
            market.cdi.value !== null && (
              <p>
                <strong>CDI corrente:</strong>{" "}
                {market.cdi.value.toFixed(2)}%
                {" — "}
                riferimento di mercato
              </p>
            )}

          {comparisonResults.map((item) => (
            <div key={item.scenarioId}>
              <h4>
                {item.scenarioName}
              </h4>

              <p>
                Rendimento annuo: {item.annualRate}%
              </p>

              <p>
                Valore finale: €
                {item.result.finalValue.toFixed(2)}
              </p>

              <p>
                Profitto: €
                {item.result.profit.toFixed(2)}
              </p>

              {item.benchmarkFinalValue !== null && (
                <p>
                  Valore finale CDI: €
                  {item.benchmarkFinalValue.toFixed(2)}
                </p>
              )}

              {item.benchmarkDifference !== null && (
                <p>
                  Differenza vs CDI:{" "}
                  {item.benchmarkDifference >= 0 ? "+" : ""}
                  €{item.benchmarkDifference.toFixed(2)}
                </p>
              )}

              {item.benchmarkDifferencePercent !== null && (
                <p>
                  Differenza percentuale vs CDI:{" "}
                  {item.benchmarkDifferencePercent >= 0 ? "+" : ""}
                  {item.benchmarkDifferencePercent.toFixed(2)}%
                </p>
              )}

              {item.benchmarkPosition !== null && (
                <p>
                  Posizione vs CDI:{" "}
                  {item.benchmarkPosition === "above"
                    ? "Sopra il benchmark"
                    : item.benchmarkPosition === "below"
                      ? "Sotto il benchmark"
                      : "Uguale al benchmark"}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default InvestmentSimulation;