import {
  generateInvestmentMetrics,
} from "../investments/metrics";

import {
  exampleInvestments,
} from "../investments/demo/exampleInvestments";


export default function InvestmentDecisionPanel() {

  const metrics =
    exampleInvestments.map(
      (investment) =>
        generateInvestmentMetrics(investment),
    );

  const bestReturn =
    [...metrics].sort(
      (a, b) =>
        b.returnPercentage -
        a.returnPercentage,
    )[0];

  const bestLiquidity =
    metrics.find(
      (item) =>
        item.liquidity === "alta",
    );

  const lowestRisk =
    metrics.find(
      (item) =>
        item.risk === "basso",
    );

  return (
    <section>
      <h2>Confronto decisionale investimenti</h2>

      <div>
        <p>
          Miglior rendimento:
          {" "}
          {bestReturn?.name}
        </p>

        <p>
          Maggiore liquidità:
          {" "}
          {bestLiquidity?.name ?? "N/D"}
        </p>

        <p>
          Minore rischio:
          {" "}
          {lowestRisk?.name ?? "N/D"}
        </p>
      </div>

      {metrics.map((item) => (
        <article key={item.name}>
          <h3>{item.name}</h3>

          <p>
            Capitale iniziale:
            {" "}
            {item.initialCapital}
          </p>

          <p>
            Valore finale:
            {" "}
            {item.finalValue.toFixed(2)}
          </p>

          <p>
            Rendimento:
            {" "}
            {item.returnPercentage.toFixed(2)}%
          </p>

          <p>
            Rischio:
            {" "}
            {item.risk}
          </p>

          <p>
            Liquidità:
            {" "}
            {item.liquidity}
          </p>
        </article>
      ))}
    </section>
  );
}
