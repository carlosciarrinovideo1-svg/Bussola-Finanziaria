interface InvestmentPerformanceChartProps {
  title?: string;
}

export default function InvestmentPerformanceChart({
  title = "Rendimento investimenti",
}: InvestmentPerformanceChartProps) {

  const data = [
    {
      name: "Portfolio finanziario",
      value: 0,
    },
    {
      name: "Affitto immobiliare",
      value: 0,
    },
    {
      name: "Flip immobiliare",
      value: 0,
    },
  ];

  return (
    <section>
      <h2>{title}</h2>

      {data.map((item) => (
        <div key={item.name}>
          <strong>{item.name}</strong>
          <p>
            Rendimento previsto: {item.value}%
          </p>
        </div>
      ))}
    </section>
  );
}
