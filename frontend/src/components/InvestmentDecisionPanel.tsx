import {
  generateInvestmentMetrics,
} from "../investments";

import {
  calculatePortfolio,
  getPortfolio,
} from "../portfolio";

import {
  exampleInvestments,
} from "../investments/demo/exampleInvestments";

import type {
  InvestmentDecisionMetrics,
} from "../investments";

import DecisionCard from "./investment/DecisionCard";
import DecisionSummary from "./investment/DecisionSummary";
import InvestmentComparisonGrid from "./investment/InvestmentComparisonGrid";

import type {
  Investment,
} from "../investments";

interface InvestmentDecisionPanelProps {
  profileId?: string;
}

export default function InvestmentDecisionPanel({
  profileId = "balanced",
}: InvestmentDecisionPanelProps) {
  const portfolio =
    getPortfolio(profileId);

  const portfolioResult =
    calculatePortfolio(portfolio);

  const portfolioInvestment: Investment = {
    id: `portfolio-${profileId}`,
    name: portfolio.name,
    initialCapital: portfolio.totalCapital,
    durationMonths: 24,
    annualGrossRate:
      portfolioResult.expectedAnnualReturn,
    capitalization: "compound",
  };

  const metrics: InvestmentDecisionMetrics[] = [
    generateInvestmentMetrics(portfolioInvestment),
    ...exampleInvestments.map(
      (investment) =>
        generateInvestmentMetrics(investment),
    ),
  ];

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

      <p>
        <strong>Profilo selezionato:</strong>{" "}
        {profileId}
      </p>

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
