import { calculateRealEstate } from "./calculator";
import type { RealEstateInvestment } from "./types";

export function analyzeRealEstate(
  investment: RealEstateInvestment,
): string[] {

  const result = calculateRealEstate(investment);

  const notes: string[] = [];

  if (result.paybackYears > 20)
    notes.push("Recupero capitale molto lungo.");

  if (result.grossYield < 6)
    notes.push("Rendimento lordo contenuto.");

  return notes;
}
