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

      <Card title="📈 SELIC">

        {selic?.status === "ok" ? (
          <>
            <h1
              style={{
                fontSize: "2.8rem",
                margin: "10px 0",
                color: "#0f766e",
              }}
            >
              {selic.value?.toFixed(2)}%
            </h1>

            <p>
              <strong>Status:</strong>{" "}
              <span style={{ color: "green" }}>● Online</span>
            </p>

            <p>
              <strong>Fonte:</strong><br />
              {selic.source}
            </p>

            <p>
              <strong>Aggiornato:</strong><br />
              {selic.updatedAt}
            </p>
          </>
        ) : (
          <>
            <h2>⚠ Connessione non disponibile</h2>

            <p>
              Non è stato possibile leggere il Banco Central.
            </p>
          </>
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