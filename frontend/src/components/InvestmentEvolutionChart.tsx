import {
  filterHistoryByPeriod,
} from "../investments/history/periods";

import {
  getInvestmentHistory,
  getInvestmentHistoryWithMarket,
} from "../investments/history";

import type {
  MarketSnapshot,
} from "../services/marketService";

import {
  exampleInvestments,
} from "../investments/demo/exampleInvestments";

import InvestmentHistoryGraph from "./investment/InvestmentHistoryGraph";

interface InvestmentEvolutionChartProps {
  period?: 6 | 12 | 24;
  market?: MarketSnapshot | null;
}

export default function InvestmentEvolutionChart({
  period = 12,
  market = null,
}: InvestmentEvolutionChartProps) {
  const series =
    market
      ? getInvestmentHistoryWithMarket(
          exampleInvestments,
          market,
        )
      : getInvestmentHistory(
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
