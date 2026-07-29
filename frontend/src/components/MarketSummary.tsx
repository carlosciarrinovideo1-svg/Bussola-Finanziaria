import { useEffect, useState } from "react";

import {
  loadMarketData,
} from "../services/marketService";

import type {
  MarketSnapshot,
} from "../services/marketService";

import MarketIndicator from "./MarketIndicator";


function MarketSummary() {

  const [marketData, setMarketData] =
    useState<MarketSnapshot | null>(null);

  const [error, setError] =
    useState(false);


  useEffect(() => {

    loadMarketData()
      .then((data) => {
        setMarketData(data);
      })
      .catch(() => {
        setError(true);
      });

  }, []);


  if (error) {
    return (
      <section>
        <h2>📈 Mercati</h2>
        <p>
          Dati mercato temporaneamente non disponibili.
        </p>
      </section>
    );
  }


  if (!marketData) {
    return (
      <section>
        <h2>📈 Mercati</h2>
        <p>
          Caricamento dati...
        </p>
      </section>
    );
  }


  return (
    <section>

      <h2>📈 Indicatori mercato</h2>

      <MarketIndicator
        title="SELIC"
        data={marketData.selic}
      />

      <MarketIndicator
        title="CDI"
        data={marketData.cdi}
      />

      <MarketIndicator
        title="IPCA"
        data={marketData.ipca}
      />

      <MarketIndicator
        title="USD"
        data={marketData.usd}
      />

      <MarketIndicator
        title="EUR"
        data={marketData.eur}
      />

    </section>
  );
}


export default MarketSummary;
