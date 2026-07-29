import type {
  FinancialScenario,
} from "./types";


export const defaultScenarios:
  FinancialScenario[] = [

    {
      id: "scenario-001",

      name: "Scenario Conservativo",

      description:
        "Scenario orientato alla protezione del capitale con ipotesi di rendimento contenute.",

      initialCapital: 100000,

      durationMonths: 24,

      expectedAnnualRate: 5,
    },


    {
      id: "scenario-002",

      name: "Scenario Bilanciato",

      description:
        "Scenario intermedio tra stabilità e crescita del capitale.",

      initialCapital: 100000,

      durationMonths: 24,

      expectedAnnualRate: 8,
    },


    {
      id: "scenario-003",

      name: "Scenario Crescita",

      description:
        "Scenario orientato alla crescita del capitale con maggiore variabilità dei risultati.",

      initialCapital: 100000,

      durationMonths: 24,

      expectedAnnualRate: 12,
    },

  ];
