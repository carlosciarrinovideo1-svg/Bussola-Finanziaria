import {
  generateInvestmentMetrics,
} from "../investments";

import {
  calculatePortfolio,
  getPortfolio,
} from "../portfolio";

import type {
  MarketSnapshot,
} from "../services/marketService";

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
  period?: 6 | 12 | 24;
  market?: MarketSnapshot | null;
}

export default function InvestmentDecisionPanel({
  profileId = "balanced",
  period = 12,
  market = null,
}: InvestmentDecisionPanelProps) {
  const portfolio =
    getPortfolio(profileId);

  const portfolioResult =
    calculatePortfolio(portfolio);

  const portfolioInvestment: Investment = {
    id: `portfolio-${profileId}`,
    name: portfolio.name,
    initialCapital: portfolio.totalCapital,
    durationMonths: period,
    annualGrossRate:
      portfolioResult.expectedAnnualReturn,
    capitalization: "compound",
  };

  const cdi =
    market?.cdi.status === "ok"
      ? market.cdi.value
      : null;

  const metrics: InvestmentDecisionMetrics[] = [
    generateInvestmentMetrics(
      portfolioInvestment,
      cdi,
    ),
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

      <p>
        <strong>Orizzonte decisionale:</strong>{" "}
        {period} mesi
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
