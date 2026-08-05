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

  return (
    <section>
      <h2>Confronto decisionale investimenti</h2>

      {metrics.map((item) => (
        <div key={item.name}>

          <h3>{item.name}</h3>

          <p>
            Capitale iniziale: {item.initialCapital}
          </p>

          <p>
            Valore finale: {item.finalValue.toFixed(2)}
          </p>

          <p>
            Profitto lordo: {item.grossProfit.toFixed(2)}
          </p>

          <p>
            Rendimento:
            {" "}
            {item.returnPercentage.toFixed(2)}%
          </p>

          <p>
            Rischio: {item.risk}
          </p>

          <p>
            Liquidità: {item.liquidity}
          </p>

        </div>
      ))}
    </section>
  );
}
