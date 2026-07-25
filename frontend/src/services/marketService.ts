import { getSelicRate, getCdiRate } from "../api";
import type { MarketData } from "../types/market";

export interface MarketSnapshot {
  selic: MarketData;
  cdi: MarketData;
}

export async function loadMarketData(): Promise<MarketSnapshot> {
  const selic = await getSelicRate();
  const cdi = await getCdiRate();

  return {
    selic,
    cdi,
  };
}
