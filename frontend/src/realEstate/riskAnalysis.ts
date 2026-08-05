export interface RealEstateRiskResult {
  score:number;
  level:string;
}

export function calculateRealEstateRisk(
  liquidity:number,
  vacancyRisk:number,
  maintenanceRisk:number,
):RealEstateRiskResult {

  const score =
    liquidity +
    vacancyRisk +
    maintenanceRisk;

  return {
    score,
    level:
      score >= 7 ? "Alto" :
      score >= 4 ? "Medio" :
      "Basso"
  };
}
