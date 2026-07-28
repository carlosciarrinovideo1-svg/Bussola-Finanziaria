import FinancialCard from "./FinancialCard";
import SuggestionList from "./SuggestionList";

interface DashboardSummaryProps {
  title: string;
  scenarioName: string;
  initialCapital: string;
  finalValue: string;
  grossProfit: string;
  taxAmount: string;
  netProfit: string;
  suggestions: string[];
}

export default function DashboardSummary({
  title,
  scenarioName,
  initialCapital,
  finalValue,
  grossProfit,
  taxAmount,
  netProfit,
  suggestions,
}: DashboardSummaryProps) {

  return (
    <div>

      <h1>
        {title}
      </h1>

      <h2>
        {scenarioName}
      </h2>

      <FinancialCard
        label="Capitale iniziale"
        value={initialCapital}
      />

      <FinancialCard
        label="Valore finale"
        value={finalValue}
      />

      <FinancialCard
        label="Profitto lordo"
        value={grossProfit}
      />

      <FinancialCard
        label="Tasse"
        value={taxAmount}
      />

      <FinancialCard
        label="Profitto netto"
        value={netProfit}
      />

      <h3>
        Suggerimenti
      </h3>

      <SuggestionList
        suggestions={suggestions}
      />

    </div>
  );
}
