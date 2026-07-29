import type {
  Portfolio,
} from "../../portfolio";

function PortfolioDetails({
  portfolio,
}: {
  portfolio: Portfolio;
}) {
  return (
    <section>
      <h3>📊 Dettaglio allocazione</h3>

      {portfolio.assets.map((asset) => {
        const allocatedCapital =
          portfolio.totalCapital *
          (asset.allocation / 100);

        const expectedProfit =
          allocatedCapital *
          (asset.expectedAnnualRate / 100);

        return (
          <div key={asset.id}>
            <h4>
              {asset.name}
            </h4>

            <p>
              Categoria:
              {" "}
              {asset.category}
            </p>

            <p>
              Allocazione:
              {" "}
              {asset.allocation}%
            </p>

            <p>
              Capitale assegnato:
              {" "}
              R$ {allocatedCapital.toFixed(2)}
            </p>

            <p>
              Rendimento annuo previsto:
              {" "}
              {asset.expectedAnnualRate}%
            </p>

            <p>
              Profitto annuo previsto:
              {" "}
              R$ {expectedProfit.toFixed(2)}
            </p>

            <hr />
          </div>
        );
      })}
    </section>
  );
}

export default PortfolioDetails;
