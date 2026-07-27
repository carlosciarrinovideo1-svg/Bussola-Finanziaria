export interface PortfolioAsset {
  id: string;
  name: string;
  category: string;
  allocation: number;
  expectedAnnualRate: number;
}

export interface Portfolio {
  name: string;
  totalCapital: number;
  assets: PortfolioAsset[];
}