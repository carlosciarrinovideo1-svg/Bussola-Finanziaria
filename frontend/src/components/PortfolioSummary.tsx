import {
  calculatePortfolio,
} from "../portfolio";

import {
  getPortfolio,
  defaultProfileId,
} from "../portfolio";

import PortfolioDetails from "./portfolio/PortfolioDetails";

interface PortfolioSummaryProps {
  /**
   * Identificatore del profilo portafoglio da visualizzare.
   * Se non specificato, usa il profilo predefinito (equilibrato).
   */
  profileId?: string;
}

function PortfolioSummary({ profileId = defaultProfileId }: PortfolioSummaryProps) {
  const portfolio = getPortfolio(profileId);

  const result = calculatePortfolio(
    portfolio
  );

  return (
    <section>
      <h2>🏦 Portafoglio investimenti</h2>

      <p>
        Nome:
        {" "}
        {portfolio.name}
      </p>

      <p>
        Capitale:
        {" "}
        R$ {result.totalCapital.toFixed(2)}
      </p>

      <p>
        Rendimento annuo atteso:
        {" "}
        {result.expectedAnnualReturn.toFixed(2)}%
      </p>

      <p>
        Profitto annuo stimato:
        {" "}
        R$ {result.expectedProfit.toFixed(2)}
      </p>

      <p>
        Valore finale stimato:
        {" "}
        R$ {result.finalValue.toFixed(2)}
      </p>

      <PortfolioDetails portfolio={portfolio} />
    </section>
  );
}

export default PortfolioSummary;
