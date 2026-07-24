import type { MarketData } from "../types/market";

interface MarketIndicatorProps {
  title: string;
  data: MarketData;
}

function MarketIndicator({ title, data }: MarketIndicatorProps) {
  if (data.status !== "ok") {
    return (
      <>
        <h2>{title}</h2>

        <p style={{ color: "red" }}>
          ● Offline
        </p>

        <p>Fonte non raggiungibile.</p>
      </>
    );
  }

  return (
    <>
      <h2
        style={{
          marginBottom: "10px",
        }}
      >
        {title}
      </h2>

      <h1
        style={{
          fontSize: "2.8rem",
          color: "#0f766e",
          margin: "0",
        }}
      >
        {data.value?.toFixed(2)}%
      </h1>

      <p>
        <strong>Status:</strong>{" "}
        <span style={{ color: "green" }}>
          ● Online
        </span>
      </p>

      <p>
        <strong>Fonte</strong><br />
        {data.source}
      </p>

      <p>
        <strong>Aggiornato</strong><br />
        {data.updatedAt}
      </p>
    </>
  );
}

export default MarketIndicator;