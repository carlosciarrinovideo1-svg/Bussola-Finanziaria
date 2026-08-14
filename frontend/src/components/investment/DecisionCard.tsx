import type {
  InvestmentDecisionMetrics,
} from "../../investments";

import MetricBadge from "./MetricBadge";
import MetricHighlight from "./MetricHighlight";
import RankingBadge from "./RankingBadge";

interface DecisionCardProps {
  metrics: InvestmentDecisionMetrics;
  position: number;
}

export default function DecisionCard({
  metrics,
  position,
}: DecisionCardProps) {
  const isBestChoice = position === 1;

  return (
    <article>
      <h3>
        {metrics.name}
        {isBestChoice && " ⭐"}
      </h3>

      <RankingBadge
        position={position}
      />

      <MetricHighlight
        label="Valore finale"
        value={metrics.finalValue.toFixed(2)}
      />

      <MetricHighlight
        label="Rendimento"
        value={`${metrics.returnPercentage.toFixed(2)}%`}
      />

      <MetricBadge
        label="Capitale iniziale"
        value={metrics.initialCapital}
      />

      <MetricBadge
        label="Profitto lordo"
        value={metrics.grossProfit.toFixed(2)}
      />

      <MetricBadge
        label="Rischio"
        value={metrics.risk}
      />

      <MetricBadge
        label="Liquidità"
        value={metrics.liquidity}
      />

      {metrics.benchmarkFinalValue !== null && (
        <MetricBadge
          label="Valore finale CDI"
          value={`R$ ${metrics.benchmarkFinalValue.toFixed(2)}`}
        />
      )}

      {metrics.benchmarkDifference !== null && (
        <MetricBadge
          label="Differenza vs CDI"
          value={`R$ ${metrics.benchmarkDifference.toFixed(2)}`}
        />
      )}

      {metrics.benchmarkDifferencePercent !== null && (
        <MetricBadge
          label="Differenza % vs CDI"
          value={`${metrics.benchmarkDifferencePercent.toFixed(2)}%`}
        />
      )}

      {metrics.benchmarkPosition !== null && (
        <MetricBadge
          label="Posizione vs CDI"
          value={
            metrics.benchmarkPosition === "above"
              ? "Sopra"
              : metrics.benchmarkPosition === "below"
                ? "Sotto"
                : "Uguale"
          }
        />
      )}
    </article>
  );
}
