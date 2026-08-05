export {
  calculatePortfolio,
} from "./calculator";

export {
  getPortfolio,
  getDefaultPortfolio,
} from "./portfolioService";

export type {
  Portfolio,
  PortfolioAsset,
} from "./types";

export type {
  PortfolioResult,
} from "./calculator";

// Export profili per utilizzo avanzato
export {
  portfolioProfiles,
  portfolioProfileIds,
  defaultProfileId,
} from "./profiles";

export { simulatePortfolio } from "./portfolioSimulation";

export type { PortfolioSimulationResult } from "./portfolioSimulation";

export { calculatePortfolioRisk } from "./riskCalculator";

export type { PortfolioRiskResult } from "./riskCalculator";

export { comparePortfolioProfiles } from "./profileComparison";

export type { PortfolioComparisonResult } from "./profileComparison";
