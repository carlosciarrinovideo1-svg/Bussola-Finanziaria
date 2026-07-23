import { getSelicRate } from "../api";

export async function loadMarketData() {
  return {
    selic: await getSelicRate(),
  };
}