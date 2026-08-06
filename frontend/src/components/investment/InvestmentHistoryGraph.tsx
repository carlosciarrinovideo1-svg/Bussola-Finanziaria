import type {
  InvestmentHistorySeries,
} from "../../investments/history/types";

interface InvestmentHistoryGraphProps {
  series: InvestmentHistorySeries[];
}

export default function InvestmentHistoryGraph({
  series,
}: InvestmentHistoryGraphProps) {
  return (
    <div>
      {series.map((item) => (
        <section key={item.name}>
          <h3>{item.name}</h3>

          {item.points.map((point) => (
            <div key={point.month}>
              {point.month} mesi: {point.value.toFixed(2)}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
