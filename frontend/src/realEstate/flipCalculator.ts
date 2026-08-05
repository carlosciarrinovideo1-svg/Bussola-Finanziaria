export interface FlipInvestment {
  purchasePrice:number;
  renovationCost:number;
  sellingPrice:number;
  taxes:number;
}

export interface FlipResult {
  grossProfit:number;
  netProfit:number;
  roi:number;
}

export function calculateFlip(i:FlipInvestment):FlipResult{
  const grossProfit=i.sellingPrice-i.purchasePrice-i.renovationCost;
  const netProfit=grossProfit-i.taxes;
  return{
    grossProfit,
    netProfit,
    roi:(netProfit/(i.purchasePrice+i.renovationCost))*100
  };
}
