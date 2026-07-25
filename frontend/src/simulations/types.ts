export interface SimulationInput {
  initialCapital: number;
  monthlyContribution: number;
  years: number;
  annualRate: number;
}

export interface SimulationResult {
  totalInvested: number;
  profit: number;
  finalValue: number;
}
