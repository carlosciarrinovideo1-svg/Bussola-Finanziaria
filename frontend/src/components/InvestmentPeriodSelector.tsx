import type { InvestmentPeriod } from "../investments/history/periods";
import {
  INVESTMENT_PERIODS,
} from "../investments/history/periods";

interface InvestmentPeriodSelectorProps {
  value: InvestmentPeriod;
  onChange: (period: InvestmentPeriod) => void;
}

export default function InvestmentPeriodSelector({
  value,
  onChange,
}: InvestmentPeriodSelectorProps) {
  return (
    <section>
      <h2>Periodo analisi</h2>

      {INVESTMENT_PERIODS.map((period) => (
        <button
          key={period}
          type="button"
          onClick={() => onChange(period)}
        >
          {period} mesi
        </button>
      ))}

      <p>
        Periodo selezionato: {value} mesi
      </p>
    </section>
  );
}
