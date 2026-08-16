import InvestmentComparisonDashboard from "./InvestmentComparisonDashboard";
import InvestmentEvolutionChart from "./InvestmentEvolutionChart";
import InvestmentPeriodSelector from "./InvestmentPeriodSelector";
import InvestmentDecisionPanel from "./InvestmentDecisionPanel";


import { useEffect, useState } from "react";
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

import {
  defaultProfileId,
} from "../portfolio";
import PortfolioSummary from "./PortfolioSummary";
import PortfolioRiskIndicator from "./PortfolioRiskIndicator";

import {
  loadMarketData,
} from "../services/marketService";

import type {
  MarketSnapshot,
} from "../services/marketService";


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

  const [market, setMarket] =
    useState<MarketSnapshot | null>(null);

  useEffect(() => {
    loadMarketData()
      .then(setMarket);
  }, []);

  const data =
    loadDashboard(
      scenario,
      exampleTaxRule,
    );

  return (

    <>
      {/* 1. Overview */}
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

      {/* 2. Profilo e Portafoglio */}
      <InvestmentWorkspace
        profileId={selectedProfile}
        onProfileChange={setSelectedProfile}
      />
      <PortfolioSummary profileId={selectedProfile} />
      <PortfolioRiskIndicator profileId={selectedProfile} />

      {/* 3. Simulazione investimento */}
      <InvestmentSimulation
        profileId={selectedProfile}
        market={market}
      />

      {/* 4. Confronto scenari e benchmark CDI */}
      <InvestmentComparisonDashboard
        profileId={selectedProfile}
        market={market}
      />

      {/* 5. Selettore periodo e visualizzazione evoluzione */}
      <InvestmentPeriodSelector
        value={selectedInvestmentPeriod}
        onChange={setSelectedInvestmentPeriod}
      />
      <InvestmentEvolutionChart
        period={selectedInvestmentPeriod}
        market={market}
      />

      {/* 6. Decisione finale */}
      <InvestmentDecisionPanel
        profileId={selectedProfile}
        period={selectedInvestmentPeriod}
        market={market}
      />

      {/* 7. Riepilogo mercato */}
      <MarketSummary />
    </>

  );
}
