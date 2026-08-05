import {
  getPortfolio,
  calculatePortfolioRisk,
  defaultProfileId,
} from "../portfolio";


interface PortfolioRiskIndicatorProps {
  profileId?: string;
}


function PortfolioRiskIndicator({
  profileId = defaultProfileId,
}: PortfolioRiskIndicatorProps) {

  const portfolio =
    getPortfolio(profileId);

  const risk =
    calculatePortfolioRisk(portfolio);


  return (
    <section>
      <h2>⚖️ Indicatori rischio/rendimento</h2>

      <p>
        Profilo rischio:
        {" "}
        {risk.riskLevel}
      </p>

      <p>
        Punteggio rischio:
        {" "}
        {risk.riskScore}
      </p>

      <p>
        Rendimento atteso:
        {" "}
        {risk.expectedReturn}%
      </p>

      <p>
        Rapporto rischio/rendimento:
        {" "}
        {risk.riskReturnRatio}
      </p>
    </section>
  );
}

export default PortfolioRiskIndicator;
