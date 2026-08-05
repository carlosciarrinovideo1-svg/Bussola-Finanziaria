interface InvestmentPerformanceChartItem {
  name: string;
  value: number;
}

interface InvestmentPerformanceChartProps {
  title?: string;
  data?: InvestmentPerformanceChartItem[];
}

export default function InvestmentPerformanceChart({
  title = "Rendimento investimenti",
  data = [],
}: InvestmentPerformanceChartProps) {

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
