import {
  defaultPortfolio,
} from "../../portfolio/config";

function PortfolioAllocation() {
  return (
    <section>
      <h3>📊 Allocazione portafoglio</h3>

      {defaultPortfolio.assets.map((asset) => {
        const allocatedCapital =
          defaultPortfolio.totalCapital *
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
