export interface InvestmentComparisonItem {
  name: string;
  type: "financial" | "realEstate";
  expectedReturn: number;
  riskLevel: string;
  liquidity: string;
  recoveryTime: number;
}

export function compareInvestments(): InvestmentComparisonItem[] {
  return [
    {
      name: "Portfolio finanziario",
      type: "financial",
      expectedReturn: 0,
      riskLevel: "Variabile",
      liquidity: "Alta",
      recoveryTime: 0,
    },
    {
      name: "Affitto immobiliare",
      type: "realEstate",
      expectedReturn: 0,
      riskLevel: "Medio",
      liquidity: "Bassa",
      recoveryTime: 0,
    },
    {
      name: "Flip immobiliare",
      type: "realEstate",
      expectedReturn: 0,
      riskLevel: "Alto",
      liquidity: "Bassa",
      recoveryTime: 0,
    },
  ];
}
