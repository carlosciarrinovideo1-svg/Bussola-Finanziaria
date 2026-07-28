import type {
  FinancialScenario,
} from "./types";


export const defaultScenarios:
  FinancialScenario[] = [

    {
      id: "scenario-001",

      name: "Scenario Prudente",

      description:
        "Scenario con rendimento ipotetico contenuto e maggiore stabilità.",

      initialCapital: 100000,

      durationMonths: 24,

      expectedAnnualRate: 5,
    },


    {
      id: "scenario-002",

      name: "Scenario Equilibrato",

      description:
        "Scenario intermedio con rapporto bilanciato tra rendimento e rischio.",

      initialCapital: 100000,

      durationMonths: 24,

      expectedAnnualRate: 8,
    },


    {
      id: "scenario-003",

      name: "Scenario Dinamico",

      description:
        "Scenario con rendimento ipotetico superiore e maggiore esposizione al rischio.",

      initialCapital: 100000,

      durationMonths: 24,

      expectedAnnualRate: 12,
    },

  ];
