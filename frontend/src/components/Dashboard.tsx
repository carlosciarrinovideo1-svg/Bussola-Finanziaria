import { useEffect, useState } from "react";
import Card from "./Card";
import { loadMarketData } from "../services/marketService";
import type { MarketData } from "../types/market";

function Dashboard() {
  const [selic, setSelic] = useState<MarketData | null>(null);

  useEffect(() => {
    async function load() {
      const market = await loadMarketData();
      setSelic(market.selic);
    }

    load();
  }, []);

  return (
    <main>
      <Card title="📈 Mercato">
        <p><strong>SELIC</strong></p>

        {selic?.status === "ok" ? (
          <>
            <p>
              <strong>{selic.value}%</strong>
            </p>
            <p>Fonte: {selic.source}</p>
            <p>Aggiornato: {selic.updatedAt}</p>
          </>
        ) : (
          <p>Connessione non disponibile.</p>
        )}
      </Card>

      <Card title="💰 Simulazioni">
        <p>Nessuna simulazione disponibile.</p>
      </Card>

      <Card title="🏦 Investimenti">
        <p>Nessun investimento configurato.</p>
      </Card>

      <Card title="📰 Avvisi Ufficiali">
        <p>Nessun avviso.</p>
      </Card>

      <Card title="⚙️ Impostazioni">
        <p>Configurazione iniziale.</p>
      </Card>
    </main>
  );
}

export default Dashboard;