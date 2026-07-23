import type { MarketData } from "../types/market";

const SELIC_URL =
  "https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados/ultimos/1?formato=json";

export async function getSelicRate(): Promise<MarketData> {
  try {
    const response = await fetch(SELIC_URL);

    if (!response.ok) {
      throw new Error("Errore nel collegamento al Banco Central");
    }

    const data = await response.json();

    return {
      value: Number(data[0].valor.replace(",", ".")),
      source: "Banco Central do Brasil",
      updatedAt: data[0].data,
      status: "ok",
    };
  } catch {
    return {
      value: null,
      source: "Banco Central do Brasil",
      updatedAt: null,
      status: "offline",
    };
  }
}