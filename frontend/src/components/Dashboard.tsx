import Card from "./Card";

function Dashboard() {
  return (
    <main>
      <Card title="📈 Mercato">
        <p><strong>SELIC</strong></p>
        <p>Connessione in preparazione...</p>
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