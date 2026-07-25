import { useEffect, useState } from "react";
import Card from "./Card";
import MarketIndicator from "./MarketIndicator";
import { loadMarketData } from "../services/marketService";
import type { MarketData } from "../types/market";

function Dashboard() {
  const [selic, setSelic] = useState<MarketData | null>(null);
  const [cdi, setCdi] = useState<MarketData | null>(null);
  const [ipca, setIpca] = useState<MarketData | null>(null);
  const [usd, setUsd] = useState<MarketData | null>(null);

  useEffect(() => {
    async function load() {
      const market = await loadMarketData();

      setSelic(market.selic);
      setCdi(market.cdi);
      setIpca(market.ipca);
      setUsd(market.usd);
    }

    load();
  }, []);

  return (
    <main>
      <Card title="📈 Mercato">
        {selic && cdi && ipca && usd ? (
          <>
            <MarketIndicator
              title="SELIC"
              data={selic}
            />

            <MarketIndicator
              title="CDI"
              data={cdi}
            />

            <MarketIndicator
              title="IPCA"
              data={ipca}
            />

            <MarketIndicator
              title="USD"
              data={usd}
            />
          </>
        ) : (
          <p>Caricamento...</p>
        )}
      </Card>

      <Card title="💰 Simulazioni">
        <p>Disponibili nella versione 0.3.</p>
      </Card>

      <Card title="🏦 Investimenti">
        <p>Disponibili nella versione 0.4.</p>
      </Card>

      <Card title="📰 Avvisi ufficiali">
        <p>Disponibili nella versione 0.5.</p>
      </Card>

      <Card title="⚙️ Impostazioni">
        <p>Configurazione iniziale.</p>
      </Card>
    </main>
  );
}

export default Dashboard;
