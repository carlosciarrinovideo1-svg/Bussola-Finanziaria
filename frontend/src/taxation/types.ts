export interface TaxRule {
  id: string;

  name: string;

  country: string;

  minimumDurationMonths: number;

  taxRate: number;
}
