import { useEffect, useState } from "react";
import Card from "./Card";
import MarketIndicator from "./MarketIndicator";
import { loadMarketData } from "../services/marketService";
import type { MarketData } from "../types/market";

interface Indicator {
  title: string;
  data: MarketData;
}

function Dashboard() {
  const [indicators, setIndicators] = useState<Indicator[]>([]);

  useEffect(() => {
    async function load() {
      const market = await loadMarketData();

      setIndicators([
        {
          title: "SELIC",
          data: market.selic,
        },
        {
          title: "CDI",
          data: market.cdi,
        },
        {
          title: "IPCA",
          data: market.ipca,
        },
        {
          title: "USD",
          data: market.usd,
        },
        {
          title: "EUR",
          data: market.eur,
        },
      ]);
    }

    load();
  }, []);

  return (
    <main>
      <Card title="📈 Mercato">
        {indicators.length > 0 ? (
          <>
            {indicators.map((indicator) => (
              <MarketIndicator
                key={indicator.title}
                title={indicator.title}
                data={indicator.data}
              />
            ))}
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
