import {
  generateInvestmentHistory,
} from "../investments/history";

export default function InvestmentEvolutionChart() {
  const series = generateInvestmentHistory();

  return (
    <section>
      <h2>Evoluzione investimenti</h2>

      {series.map((item) => (
        <div key={item.name}>
          <strong>{item.name}</strong>

          {item.points.map((point) => (
            <p key={point.month}>
              {point.month} mesi: {point.value}
            </p>
          ))}
        </div>
      ))}
    </section>
  );
}
