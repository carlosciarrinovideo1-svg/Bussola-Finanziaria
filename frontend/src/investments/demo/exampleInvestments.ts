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
];
