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

      <PortfolioSummary
        profileId={portfolioProfile}
      />

      <InvestmentSimulation />

      <MarketSummary />

    </>

  );
}