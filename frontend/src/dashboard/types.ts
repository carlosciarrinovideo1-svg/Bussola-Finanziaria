import type {
  FinancialScenario,
} from "../scenarios";

import type {
  FinancialEngineResult,
} from "../services/financialEngineService";

import type {
  AdvisorSuggestion,
} from "../advisor";


export interface DashboardResult {
  scenario: FinancialScenario;

  financial: FinancialEngineResult;

  suggestions: AdvisorSuggestion[];
}
