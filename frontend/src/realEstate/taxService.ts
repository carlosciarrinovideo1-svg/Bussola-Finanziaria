export interface RealEstateTaxSummary {
  notes: string[];
}

export function getRealEstateTaxSummary(): RealEstateTaxSummary {
  return {
    notes: [
      "Verificare IR sul reddito da locazione.",
      "Considerare IPTU.",
      "Considerare tassazione della plusvalenza alla vendita."
    ]
  };
}
