import {
  generateInvestmentMetrics,
} from "../investments";

import {
  exampleInvestments,
} from "../investments/demo/exampleInvestments";

import DecisionCard from "./investment/DecisionCard";
import DecisionSummary from "./investment/DecisionSummary";
import InvestmentComparisonGrid from "./investment/InvestmentComparisonGrid";

export default function InvestmentDecisionPanel() {
  const metrics =
    exampleInvestments.map(
      (investment) =>
        generateInvestmentMetrics(investment),
    );

  const ranking =
    [...metrics].sort(
      (a, b) =>
        b.returnPercentage -
        a.returnPercentage,
    );

  return (
    <section>
      <h2>
        Confronto decisionale investimenti
      </h2>

      <DecisionSummary
        metrics={ranking}
      />

      <InvestmentComparisonGrid>
        {ranking.map(
          (item, index) => (
            <DecisionCard
              key={item.name}
              metrics={item}
              position={index + 1}
            />
          ),
        )}
      </InvestmentComparisonGrid>
    </section>
  );
}
