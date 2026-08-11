import type {
  InvestmentHistorySeries,
} from "../../investments/history/types";

interface InvestmentHistoryGraphProps {
  series: InvestmentHistorySeries[];
}

const WIDTH = 520;
const HEIGHT = 220;
const PADDING_X = 40;
const PADDING_Y = 24;

export default function InvestmentHistoryGraph({
  series,
}: InvestmentHistoryGraphProps) {
  return (
    <div
      style={{
        display: "grid",
        gap: "1.5rem",
      }}
    >
      {series.map((item) => {
        if (item.points.length === 0) {
          return null;
        }

        const values = item.points.map(
          (point) => point.value,
        );

        const min = Math.min(...values);
        const max = Math.max(...values);
        const range = Math.max(max - min, 1);

        const chartWidth =
          WIDTH - PADDING_X * 2;
        const chartHeight =
          HEIGHT - PADDING_Y * 2;

        const points = item.points.map(
          (point, index) => {
            const x =
              PADDING_X +
              (index * chartWidth) /
                Math.max(
                  item.points.length - 1,
                  1,
                );

            const y =
              HEIGHT -
              PADDING_Y -
              ((point.value - min) / range) *
                chartHeight;

            return {
              x,
              y,
              month: point.month,
              value: point.value,
            };
          },
        );

        const polylinePoints = points
          .map(
            (point) =>
              `${point.x},${point.y}`,
          )
          .join(" ");

        return (
          <section key={item.name}>
            <h3>{item.name}</h3>

            <svg
              width="100%"
              height={HEIGHT}
              viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
              role="img"
              aria-label={`Evoluzione di ${item.name}`}
            >
              <line
                x1={PADDING_X}
                y1={HEIGHT - PADDING_Y}
                x2={WIDTH - PADDING_X}
                y2={HEIGHT - PADDING_Y}
                stroke="currentColor"
                opacity="0.3"
              />

              <line
                x1={PADDING_X}
                y1={PADDING_Y}
                x2={PADDING_X}
                y2={HEIGHT - PADDING_Y}
                stroke="currentColor"
                opacity="0.3"
              />

              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                points={polylinePoints}
              />

              {points.map((point) => (
                <g key={point.month}>
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="5"
                    fill="currentColor"
                    tabIndex={0}
                    aria-label={`${point.month} mesi: ${point.value.toFixed(2)}`}
                  />
                  <title>
                    {point.month} mesi:{" "}
                    {point.value.toFixed(2)}
                  </title>
                </g>
              ))}

              {points.map((point) => (
                <text
                  key={`month-${point.month}`}
                  x={point.x}
                  y={HEIGHT - 6}
                  textAnchor="middle"
                  fontSize="10"
                >
                  {point.month}m
                </text>
              ))}
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
