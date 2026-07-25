import { getSelicRate, getCdiRate, getIpcaRate, getUsdRate, getEurRate } from "../api";
import type { MarketData } from "../types/market";

export interface MarketSnapshot {
  selic: MarketData;
  cdi: MarketData;
  ipca: MarketData;
  usd: MarketData;
  eur: MarketData;
}

export async function loadMarketData(): Promise<MarketSnapshot> {
  const selic = await getSelicRate();
  const cdi = await getCdiRate();
  const ipca = await getIpcaRate();
  const usd = await getUsdRate();
  const eur = await getEurRate();

  return {
    selic,
    cdi,
    ipca,
    usd,
    eur,
  };
}
