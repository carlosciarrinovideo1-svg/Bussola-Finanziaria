interface InvestmentMetricsPanelProps {
  returnValue: number;
  risk: string;
  liquidity: string;
}

export default function InvestmentMetricsPanel({
  returnValue,
  risk,
  liquidity,
}: InvestmentMetricsPanelProps) {
  return (
    <section>
      <h2>Indicatori investimento</h2>

      <p>
        Rendimento previsto: {returnValue}%
      </p>

      <p>
        Rischio: {risk}
      </p>

      <p>
        Liquidità: {liquidity}
      </p>
    </section>
  );
}
