import { getSelicRate, getCdiRate, getIpcaRate } from "../api";
import type { MarketData } from "../types/market";

export interface MarketSnapshot {
  selic: MarketData;
  cdi: MarketData;
  ipca: MarketData;
}

export async function loadMarketData(): Promise<MarketSnapshot> {
  const selic = await getSelicRate();
  const cdi = await getCdiRate();
  const ipca = await getIpcaRate();

  return {
    selic,
    cdi,
    ipca,
  };
}
