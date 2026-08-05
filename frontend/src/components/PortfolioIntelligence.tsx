import {
  portfolioProfiles,
  portfolioProfileIds,
  calculatePortfolio,
  simulatePortfolio,
} from "../portfolio";


interface PortfolioIntelligenceProps {
  selectedProfile?: string;
}


function PortfolioIntelligence({
  selectedProfile,
}: PortfolioIntelligenceProps) {

  return (
    <section>
      <h2>🧭 Portfolio Intelligence</h2>

      {selectedProfile && (
        <p>
          Profilo selezionato:
          {" "}
          {portfolioProfiles[selectedProfile]?.name}
        </p>
      )}

      <h3>Confronto profili</h3>

      {portfolioProfileIds.map((profileId) => {
        const portfolio =
          portfolioProfiles[profileId];

        const result =
          calculatePortfolio(portfolio);

        const projection =
          simulatePortfolio(
            portfolio,
            [24]
          )[0];

        return (
          <div key={profileId}>
            <h4>
              {portfolio.name}
            </h4>

            <p>
              Rendimento annuo:
              {" "}
              {result.expectedAnnualReturn.toFixed(2)}%
            </p>

            <p>
              Valore stimato 24 mesi:
              {" "}
              R$ {projection.finalValue.toFixed(2)}
            </p>

            <hr />
          </div>
        );
      })}
    </section>
  );
}

export default PortfolioIntelligence;
