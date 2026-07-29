import type {
  Portfolio,
} from "../../portfolio";

function PortfolioAllocation({
  portfolio,
}: {
  portfolio: Portfolio;
}) {
  return (
    <section>
      <h3>📊 Allocazione portafoglio</h3>

      {portfolio.assets.map((asset) => {
        const allocatedCapital =
          portfolio.totalCapital *
          (asset.allocation / 100);

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
              Rendimento atteso:
              {" "}
              {asset.expectedAnnualRate}%
            </p>

            <hr />
          </div>
        );
      })}
    </section>
  );
}

export default PortfolioAllocation;
