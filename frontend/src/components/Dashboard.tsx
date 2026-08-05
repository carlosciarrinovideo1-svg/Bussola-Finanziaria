import InvestmentComparisonDashboard from "./InvestmentComparisonDashboard";
import InvestmentEvolutionChart from "./InvestmentEvolutionChart";
import InvestmentPeriodSelector from "./InvestmentPeriodSelector";
import InvestmentDecisionPanel from "./InvestmentDecisionPanel";


import { useState } from "react";
import {
  loadDashboard,
} from "../dashboard/dashboardService";

import {
  exampleTaxRule,
} from "../dashboard/demoDashboard";

import type {
  FinancialScenario,
} from "../scenarios";

import {
  defaultScenarios,
} from "../scenarios";

import DashboardSummary from "./dashboard/DashboardSummary";


import InvestmentSimulation from "./InvestmentSimulation";

import MarketSummary from "./MarketSummary";
import InvestmentWorkspace from "./InvestmentWorkspace";
import RealEstateRentalAnalysis from "./RealEstateRentalAnalysis";
import RealEstateFlipAnalysis from "./RealEstateFlipAnalysis";

import {
  defaultProfileId,
} from "../portfolio";


interface DashboardProps {
  scenario?: FinancialScenario;

  /**
   * Profilo investimento da visualizzare.
   * Default: portafoglio equilibrato.
   */
  portfolioProfile?: string;
}


export default function Dashboard({
  scenario = defaultScenarios[0],
  portfolioProfile = defaultProfileId,
}: DashboardProps) {

  const [selectedProfile, setSelectedProfile] =
    useState(portfolioProfile);

  const [selectedInvestmentPeriod, setSelectedInvestmentPeriod] =
    useState<6 | 12 | 24>(12);

  const data =
    loadDashboard(
      scenario,
      exampleTaxRule,
    );

  return (

    <>

      <DashboardSummary
        title={data.title}
        scenarioName={data.scenarioName}
        initialCapital={data.initialCapital}
        finalValue={data.finalValue}
        grossProfit={data.grossProfit}
        taxAmount={data.taxAmount}
        netProfit={data.netProfit}
        suggestions={data.suggestions}
      />
      <InvestmentWorkspace
        profileId={selectedProfile}
        onProfileChange={setSelectedProfile}
      />

      <RealEstateRentalAnalysis />

      <RealEstateFlipAnalysis />

      <InvestmentComparisonDashboard />

      <InvestmentPeriodSelector
        value={selectedInvestmentPeriod}
        onChange={setSelectedInvestmentPeriod}
      />

      <InvestmentEvolutionChart period={selectedInvestmentPeriod} />

      <InvestmentDecisionPanel />

      <InvestmentSimulation />

      <MarketSummary />

    </>

  );
}