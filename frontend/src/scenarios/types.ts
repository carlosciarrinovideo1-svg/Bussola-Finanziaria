export interface FinancialScenario {
  id: string;

  name: string;

  description: string;

  initialCapital: number;

  durationMonths: number;

  expectedAnnualRate: number;
}
