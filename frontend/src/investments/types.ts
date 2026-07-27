export type CapitalizationType =
  | "simple"
  | "compound";

export interface Investment {
  id: string;
  name: string;

  initialCapital: number;

  durationMonths: number;

  annualGrossRate: number;

  capitalization: CapitalizationType;
}
