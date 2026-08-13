import {
  comparePortfolioProfiles,
  defaultProfileId,
} from "../portfolio";

import type {
  MarketSnapshot,
} from "../services/marketService";

interface InvestmentComparisonDashboardProps {
  profileId?: string;
  market?: MarketSnapshot | null;
}

export default function InvestmentComparisonDashboard({
  profileId = defaultProfileId,
  market = null,
}: InvestmentComparisonDashboardProps) {
  const comparisons = comparePortfolioProfiles();

  const selectedProfile =
    comparisons.find(
      (item) => item.profileId === profileId,
    ) ?? comparisons[0];

  const cdi =
    market?.cdi.status === "ok"
      ? market.cdi.value
      : null;

  return (
    <section>
      <h2>📊 Confronto investimento</h2>

      {selectedProfile && (
        <>
          <h3>
            Profilo selezionato: {selectedProfile.name}
          </h3>

          <p>
            Rendimento annuo atteso:{" "}
            {selectedProfile.expectedReturn.toFixed(2)}%
          </p>

          <p>
            Rischio: {selectedProfile.riskLevel}
          </p>

          <p>
            Rapporto rischio/rendimento:{" "}
            {selectedProfile.riskReturnRatio.toFixed(2)}
          </p>

          {cdi !== null && (
            <>
              <p>
                <strong>CDI corrente:</strong>{" "}
                {cdi.toFixed(2)}%
              </p>

              <p>
                Differenza rispetto al CDI:{" "}
                {(
                  selectedProfile.expectedReturn - cdi
                ).toFixed(2)}
                punti percentuali
              </p>
            </>
          )}
        </>
      )}

      <section>
        <h3>Confronto profili</h3>

        {comparisons.map((item) => (
          <div key={item.profileId}>
            <h4>{item.name}</h4>

            <p>
              Rendimento atteso:{" "}
              {item.expectedReturn.toFixed(2)}%
            </p>

            <p>
              Rischio: {item.riskLevel}
            </p>

            <p>
              Rapporto rischio/rendimento:{" "}
              {item.riskReturnRatio.toFixed(2)}
            </p>

            {item.projections.map((projection) => (
              <p key={projection.months}>
                {projection.months} mesi: R${" "}
                {projection.finalValue.toFixed(2)}
              </p>
            ))}

            <hr />
          </div>
        ))}
      </section>
    </section>
  );
}
