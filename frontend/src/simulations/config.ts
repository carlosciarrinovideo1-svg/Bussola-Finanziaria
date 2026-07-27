export interface SimulationScenario {
  id: string;
  name: string;
  description: string;
  annualRate: number;
}

export const simulationScenarios: SimulationScenario[] = [
  {
    id: "conservative",
    name: "Conservativo",
    description:
      "Scenario con rendimento contenuto e maggiore prudenza.",
    annualRate: 5,
  },
  {
    id: "moderate",
    name: "Moderato",
    description:
      "Scenario intermedio con equilibrio tra rendimento e prudenza.",
    annualRate: 8,
  },
  {
    id: "dynamic",
    name: "Dinamico",
    description:
      "Scenario con rendimento superiore e maggiore variabilità.",
    annualRate: 12,
  },
];
