import type {
  AdvisorSuggestion,
} from "./types";

import type {
  FinancialEngineResult,
} from "../services/financialEngineService";

export function generateAdvisorSuggestions(
  result: FinancialEngineResult
): AdvisorSuggestion[] {

  const suggestions: AdvisorSuggestion[] = [];

  if (result.taxAmount > 0) {
    suggestions.push({
      id: "tax-impact",
      title: "Impatto fiscale",
      description:
        "La tassazione riduce il profitto netto dell'investimento.",
      priority: "medium",
    });
  }

  if (result.grossProfit > result.initialCapital * 0.20) {
    suggestions.push({
      id: "good-performance",
      title: "Buona redditività",
      description:
        "L'investimento mostra un rendimento interessante.",
      priority: "low",
    });
  }

  return suggestions;
}
