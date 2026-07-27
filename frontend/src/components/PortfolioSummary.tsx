import {
  calculatePortfolio,
} from "../portfolio";

import {
  defaultPortfolio,
} from "../portfolio/config";

function PortfolioSummary() {
  const result = calculatePortfolio(
    defaultPortfolio
  );

  return (
    <section>
      <h2>🏦 Portafoglio investimenti</h2>

      <p>
        Nome:
        {" "}
        {defaultPortfolio.name}
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
    </section>
  );
}

export default PortfolioSummary;
