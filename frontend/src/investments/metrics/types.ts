export type RiskLevel =
  | "basso"
  | "medio"
  | "alto";

export type LiquidityLevel =
  | "alta"
  | "media"
  | "bassa";

export interface InvestmentDecisionMetrics {
  name: string;
  initialCapital: number;
  finalValue: number;
  grossProfit: number;
  returnPercentage: number;
  risk: RiskLevel;
  liquidity: LiquidityLevel;
}
