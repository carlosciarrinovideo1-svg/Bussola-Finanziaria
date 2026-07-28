import type {
  FinancialScenario,
} from "./types";

export const defaultScenarios:
  FinancialScenario[] = [
    {
      id: "scenario-001",
      name: "Scenario Base",
      description:
        "Scenario iniziale di esempio.",

      initialCapital: 100000,

      durationMonths: 24,

      expectedAnnualRate: 10,
    },
  ];
