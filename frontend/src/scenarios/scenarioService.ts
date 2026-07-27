import type {
  FinancialScenario,
} from "./types";

import type {
  Investment,
} from "../investments";

export function scenarioToInvestment(
  scenario: FinancialScenario
): Investment {

  return {
    id: scenario.id,
    name: scenario.name,
    initialCapital: scenario.initialCapital,
    durationMonths: scenario.durationMonths,
    annualGrossRate: scenario.expectedAnnualRate,
    capitalization: "compound",
  };
}
