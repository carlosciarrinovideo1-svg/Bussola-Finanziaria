import type {
  DashboardResult,
} from "./types";


export interface DashboardViewModel {

  title: string;

  scenarioName: string;

  initialCapital: string;

  finalValue: string;

  grossProfit: string;

  taxAmount: string;

  netProfit: string;

  suggestions: string[];
}


export function createDashboardViewModel(
  result: DashboardResult
): DashboardViewModel {

  return {

    title:
      "Risultato analisi finanziaria",

    scenarioName:
      result.scenario.name,

    initialCapital:
      formatCurrency(
        result.financial.initialCapital
      ),

    finalValue:
      formatCurrency(
        result.financial.finalValue
      ),

    grossProfit:
      formatCurrency(
        result.financial.grossProfit
      ),

    taxAmount:
      formatCurrency(
        result.financial.taxAmount
      ),

    netProfit:
      formatCurrency(
        result.financial.netProfit
      ),

    suggestions:
      result.suggestions.map(
        suggestion =>
          suggestion.description
      ),
  };
}


function formatCurrency(
  value: number
): string {

  return new Intl.NumberFormat(
    "it-IT",
    {
      style: "currency",
      currency: "EUR",
    }
  ).format(value);
}
