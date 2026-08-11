import {
  filterHistoryByPeriod,
} from "../investments/history/periods";

import {
  getInvestmentHistory,
} from "../investments/history";

import {
  exampleInvestments,
} from "../investments/demo/exampleInvestments";

import InvestmentHistoryGraph from "./investment/InvestmentHistoryGraph";

interface InvestmentEvolutionChartProps {
  period?: 6 | 12 | 24;
}

export default function InvestmentEvolutionChart({
  period = 12,
}: InvestmentEvolutionChartProps) {
  const series =
    getInvestmentHistory(
      exampleInvestments,
    );

  const filteredSeries = series.map((item) => ({
    ...item,
    points: filterHistoryByPeriod(
      item.points,
      period,
    ),
  }));

  return (
    <section>
      <h2>
        Evoluzione investimenti ({period} mesi)
      </h2>

      <InvestmentHistoryGraph
        series={filteredSeries}
      />
    </section>
  );
}
