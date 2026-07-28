import FinancialCard from "./FinancialCard";
import SuggestionList from "./SuggestionList";
import DashboardSection from "./DashboardSection";

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

      <DashboardSection title="Risultato finanziario">

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

      </DashboardSection>


      <DashboardSection title="Suggerimenti">

        <SuggestionList
          suggestions={suggestions}
        />

      </DashboardSection>

    </div>
  );
}
