import type {
  Investment,
} from "../types";


export const exampleInvestments: Investment[] = [
  {
    id: "portfolio-demo",
    name: "Portfolio finanziario",
    initialCapital: 100000,
    durationMonths: 24,
    annualGrossRate: 5,
    capitalization: "compound",
  },
  {
    id: "rental-demo",
    name: "Affitto immobiliare",
    initialCapital: 150000,
    durationMonths: 24,
    annualGrossRate: 4,
    capitalization: "simple",
  },
  {
    id: "flip-demo",
    name: "Flip immobiliare",
    initialCapital: 80000,
    durationMonths: 12,
    annualGrossRate: 8,
    capitalization: "simple",
  },
];
