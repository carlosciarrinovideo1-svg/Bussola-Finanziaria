import {
  filterHistoryByPeriod,
} from "../investments/history/periods";

import {
  generateInvestmentHistory,
} from "../investments/history";

interface InvestmentEvolutionChartProps {
  period?: 6 | 12 | 24;
}

export default function InvestmentEvolutionChart({
  period = 12,
}: InvestmentEvolutionChartProps) {

  const series = generateInvestmentHistory();

  const filteredSeries = series.map((item) => ({
    ...item,
    points: filterHistoryByPeriod(
      item.points,
      period,
    ),
  }));

  return (
    <section>
      <h2>Evoluzione investimenti ({period} mesi)</h2>

      {filteredSeries.map((item) => (
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
