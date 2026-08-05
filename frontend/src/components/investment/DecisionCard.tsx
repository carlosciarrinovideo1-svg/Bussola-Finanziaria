import type {
  InvestmentDecisionMetrics,
} from "../../investments";

import MetricBadge from "./MetricBadge";
import RankingBadge from "./RankingBadge";

interface DecisionCardProps {
  metrics: InvestmentDecisionMetrics;
  position: number;
}

export default function DecisionCard({
  metrics,
  position,
}: DecisionCardProps) {
  return (
    <article>
      <h3>{metrics.name}</h3>

      <RankingBadge position={position} />

      <MetricBadge
        label="Capitale iniziale"
        value={metrics.initialCapital}
      />

      <MetricBadge
        label="Valore finale"
        value={metrics.finalValue.toFixed(2)}
      />

      <MetricBadge
        label="Rendimento"
        value={`${metrics.returnPercentage.toFixed(2)}%`}
      />

      <MetricBadge
        label="Rischio"
        value={metrics.risk}
      />

      <MetricBadge
        label="Liquidità"
        value={metrics.liquidity}
      />
    </article>
  );
}
