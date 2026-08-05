import InvestmentPerformanceChart from "./InvestmentPerformanceChart";

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
