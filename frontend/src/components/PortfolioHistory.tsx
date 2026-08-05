import {
  getPortfolio,
  generatePortfolioHistory,
  defaultProfileId,
} from "../portfolio";


interface PortfolioHistoryProps {
  profileId?: string;
}


function PortfolioHistory({
  profileId = defaultProfileId,
}: PortfolioHistoryProps) {

  const portfolio =
    getPortfolio(profileId);

  const history =
    generatePortfolioHistory(portfolio);

  return (
    <section>
      <h2>📈 Evoluzione portfolio</h2>

      {history.map((point) => (
        <div key={point.months}>
          <h3>
            {point.months} mesi
          </h3>

          <p>
            Valore stimato:
            {" "}
            R$ {point.value.toFixed(2)}
          </p>

          <p>
            Crescita:
            {" "}
            {point.growth.toFixed(2)}%
          </p>

          <hr />
        </div>
      ))}
    </section>
  );
}

export default PortfolioHistory;
