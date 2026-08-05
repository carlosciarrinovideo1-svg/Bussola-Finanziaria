import {
  filterHistoryByPeriod,
} from "../investments/history/periods";

import {
  createInvestmentHistory,
} from "../investments/history";

import {
  exampleInvestments,
} from "../investments/demo/exampleInvestments";

interface InvestmentEvolutionChartProps {
  period?: 6 | 12 | 24;
}

export default function InvestmentEvolutionChart({
  period = 12,
}: InvestmentEvolutionChartProps) {

  const series = [
    createInvestmentHistory(
      exampleInvestments[0],
      exampleInvestments[0].name,
    ),
  ];

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
