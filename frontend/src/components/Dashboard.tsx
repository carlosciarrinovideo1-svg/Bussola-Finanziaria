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

import PortfolioSummary from "./PortfolioSummary";

import InvestmentSimulation from "./InvestmentSimulation";

import MarketSummary from "./MarketSummary";
import PortfolioSimulation from "./PortfolioSimulation";
import PortfolioRiskIndicator from "./PortfolioRiskIndicator";
import PortfolioProfileSelector from "./PortfolioProfileSelector";
import PortfolioIntelligence from "./PortfolioIntelligence";
import PortfolioProfileComparison from "./PortfolioProfileComparison";

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

      <PortfolioProfileSelector
        value={selectedProfile}
        onChange={setSelectedProfile}
      />

      <PortfolioSummary
        profileId={selectedProfile}
      />

      <PortfolioSimulation
        profileId={selectedProfile}
      />

      <PortfolioIntelligence
        selectedProfile={selectedProfile}
      />

      <PortfolioRiskIndicator
        profileId={selectedProfile}
      />

      <PortfolioProfileComparison
        selectedProfile={selectedProfile}
      />

      <InvestmentSimulation />

      <MarketSummary />

    </>

  );
}