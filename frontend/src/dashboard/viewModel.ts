import type {
  DashboardResult,
} from "./types";


export interface DashboardViewModel {

  title: string;

  scenarioName: string;

  description: string;

  expectedAnnualRate: number;

  initialCapital: number;

  finalValue: number;

  grossProfit: number;

  taxAmount: number;

  netProfit: number;

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

    description:
      result.scenario.description,

    expectedAnnualRate:
      result.scenario.expectedAnnualRate,

    initialCapital:
      result.financial.initialCapital,

    finalValue:
      result.financial.finalValue,

    grossProfit:
      result.financial.grossProfit,

    taxAmount:
      result.financial.taxAmount,

    netProfit:
      result.financial.netProfit,

    suggestions:
      result.suggestions.map(
        suggestion =>
          suggestion.description
      ),

  };
}
