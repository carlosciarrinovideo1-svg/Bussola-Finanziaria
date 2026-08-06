import type {
  InvestmentDecisionMetrics,
} from "../../investments";

interface DecisionSummaryProps {
  metrics: InvestmentDecisionMetrics[];
}

export default function DecisionSummary({
  metrics,
}: DecisionSummaryProps) {
  if (metrics.length === 0) {
    return null;
  }

  const bestReturn =
    [...metrics].sort(
      (a, b) =>
        b.returnPercentage -
        a.returnPercentage,
    )[0];

  const lowestRisk =
    metrics.find(
      (item) =>
        item.risk === "basso",
    );

  const bestLiquidity =
    metrics.find(
      (item) =>
        item.liquidity === "alta",
    );

  return (
    <section>
      <h3>
        Sintesi decisionale
      </h3>

      <p>
        Miglior rendimento:{" "}
        <strong>
          {bestReturn.name}
        </strong>
      </p>

      {lowestRisk && (
        <p>
          Rischio più basso:{" "}
          <strong>
            {lowestRisk.name}
          </strong>
        </p>
      )}

      {bestLiquidity && (
        <p>
          Maggiore liquidità:{" "}
          <strong>
            {bestLiquidity.name}
          </strong>
        </p>
      )}
    </section>
  );
}
