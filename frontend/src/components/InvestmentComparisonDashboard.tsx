import InvestmentPerformanceChart from "./InvestmentPerformanceChart";
import InvestmentMetricsPanel from "./InvestmentMetricsPanel";

import {
  compareInvestments,
} from "../investments";


export default function InvestmentComparisonDashboard() {

  const investments =
    compareInvestments();

  return (
    <>
    <InvestmentPerformanceChart
        data={investments.map((item) => ({
          name: item.name,
          value: item.expectedReturn,
        }))}
      />

      <InvestmentMetricsPanel
        returnValue={investments[0]?.expectedReturn ?? 0}
        risk={investments[0]?.riskLevel ?? "N/D"}
        liquidity={investments[0]?.liquidity ?? "N/D"}
      />

    <section>
      <h2>📊 Confronto investimenti</h2>

      {investments.map((item) => (
        <div key={item.name}>
          <h3>{item.name}</h3>

          <p>
            Tipo: {item.type}
          </p>

          <p>
            Rendimento atteso:
            {" "}
            {item.expectedReturn}%
          </p>

          <p>
            Rischio:
            {" "}
            {item.riskLevel}
          </p>

          <p>
            Liquidità:
            {" "}
            {item.liquidity}
          </p>

          <p>
            Recupero capitale:
            {" "}
            {item.recoveryTime} mesi
          </p>

          <hr />
        </div>
      ))}
    </section>
    </>
  );
}
