import { getSelicRate } from "../api";
import type { MarketData } from "../types/market";

export interface MarketSnapshot {
  selic: MarketData;
}

export async function loadMarketData(): Promise<MarketSnapshot> {
  const selic = await getSelicRate();

  return {
    selic,
  };
}