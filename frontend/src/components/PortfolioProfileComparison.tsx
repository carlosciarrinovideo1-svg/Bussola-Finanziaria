import {
  comparePortfolioProfiles,
} from "../portfolio";


interface PortfolioProfileComparisonProps {
  selectedProfile?: string;
}


function PortfolioProfileComparison({
  selectedProfile,
}: PortfolioProfileComparisonProps) {

  const results =
    comparePortfolioProfiles();

  return (
    <section>
      <h2>📊 Confronto profili portfolio</h2>

      {results.map((item) => (
        <div key={item.profileId}>
          <h3>
            {item.name}
            {selectedProfile === item.profileId && " ⭐"}
          </h3>

          <p>
            Rendimento atteso:
            {" "}
            {item.expectedReturn.toFixed(2)}%
          </p>

          <p>
            Livello rischio:
            {" "}
            {item.riskLevel}
          </p>

          <p>
            Rapporto rischio/rendimento:
            {" "}
            {item.riskReturnRatio.toFixed(2)}
          </p>

          <p>
            Valore a 24 mesi:
            {" "}
            R$ {
              item.projections
                .find((projection) => projection.months === 24)
                ?.finalValue
                .toFixed(2)
            }
          </p>

          <hr />
        </div>
      ))}
    </section>
  );
}

export default PortfolioProfileComparison;
