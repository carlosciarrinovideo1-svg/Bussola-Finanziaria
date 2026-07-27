import type { Portfolio } from "./types";

export const defaultPortfolio: Portfolio = {
  name: "Portafoglio equilibrato",
  totalCapital: 100000,
  assets: [
    {
      id: "fixed-income",
      name: "Renda fixa",
      category: "Conservativo",
      allocation: 50,
      expectedAnnualRate: 10,
    },
    {
      id: "government-bonds",
      name: "Titoli governativi",
      category: "Moderato",
      allocation: 30,
      expectedAnnualRate: 9,
    },
    {
      id: "variable-income",
      name: "Renda variável",
      category: "Dinamico",
      allocation: 20,
      expectedAnnualRate: 12,
    },
  ],
};
