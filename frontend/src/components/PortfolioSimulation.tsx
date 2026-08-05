import {
  getPortfolio,
  defaultProfileId,
  simulatePortfolio,
} from "../portfolio";


interface PortfolioSimulationProps {
  profileId?: string;
}


function PortfolioSimulation({
  profileId = defaultProfileId,
}: PortfolioSimulationProps) {

  const portfolio =
    getPortfolio(profileId);

  const results =
    simulatePortfolio(
      portfolio,
      [6, 12, 24]
    );

  return (
    <section>
      <h2>📈 Proiezione portafoglio</h2>

      {results.map((item) => (
        <div key={item.months}>
          <h3>
            {item.months} mesi
          </h3>

          <p>
            Valore stimato: R$ {item.finalValue.toFixed(2)}
          </p>

          <p>
            Profitto stimato: R$ {item.profit.toFixed(2)}
          </p>
        </div>
      ))}
    </section>
  );
}

export default PortfolioSimulation;
