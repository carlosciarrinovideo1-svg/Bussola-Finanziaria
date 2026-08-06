import type {
  InvestmentHistorySeries,
} from "../../investments/history/types";

interface InvestmentHistoryGraphProps {
  series: InvestmentHistorySeries[];
}

const WIDTH = 320;
const HEIGHT = 140;
const PADDING = 16;

export default function InvestmentHistoryGraph({
  series,
}: InvestmentHistoryGraphProps) {
  return (
    <div
      style={{
        display: "grid",
        gap: "1rem",
      }}
    >
      {series.map((item) => {
        const values = item.points.map(
          (point) => point.value,
        );

        const min = Math.min(...values);
        const max = Math.max(...values);
        const range = Math.max(max - min, 1);

        const points = item.points
          .map((point, index) => {
            const x =
              PADDING +
              (index *
                (WIDTH - PADDING * 2)) /
                Math.max(
                  item.points.length - 1,
                  1,
                );

            const y =
              HEIGHT -
              PADDING -
              ((point.value - min) / range) *
                (HEIGHT - PADDING * 2);

            return `${x},${y}`;
          })
          .join(" ");

        return (
          <section key={item.name}>
            <h3>{item.name}</h3>

            <svg
              width={WIDTH}
              height={HEIGHT}
              viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                points={points}
              />
            </svg>

            <p>
              Min: {min.toFixed(2)}
              {" — "}
              Max: {max.toFixed(2)}
            </p>
          </section>
        );
      })}
    </div>
  );
}
