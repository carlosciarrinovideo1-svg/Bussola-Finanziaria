import type {
  InvestmentHistorySeries,
} from "./types";

export function generateInvestmentHistory(): InvestmentHistorySeries[] {
  return [
    {
      name: "Portfolio finanziario",
      points: [
        { month: 0, value: 100 },
        { month: 6, value: 103 },
        { month: 12, value: 106 },
        { month: 24, value: 112 },
      ],
    },
    {
      name: "Affitto immobiliare",
      points: [
        { month: 0, value: 100 },
        { month: 6, value: 102 },
        { month: 12, value: 104 },
        { month: 24, value: 108 },
      ],
    },
    {
      name: "Flip immobiliare",
      points: [
        { month: 0, value: 100 },
        { month: 6, value: 115 },
        { month: 12, value: 120 },
        { month: 24, value: 120 },
      ],
    },
  ];
}
