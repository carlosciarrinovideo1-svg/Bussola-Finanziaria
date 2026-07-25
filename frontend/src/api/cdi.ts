import type { MarketData } from "../types/market";

const CDI_URL =
  "https://api.bcb.gov.br/dados/serie/bcdata.sgs.4389/dados/ultimos/1?formato=json";

export async function getCdiRate(): Promise<MarketData> {
  try {
    const response = await fetch(CDI_URL);

    if (!response.ok) {
      throw new Error("Errore nella connessione al Banco Central");
    }

    const data = await response.json();

    return {
      value: Number(data[0].valor.replace(",", ".")),
      source: "Banco Central do Brasil",
      updatedAt: data[0].data,
      status: "ok",
      unit: "percent",
    };
  } catch {
    return {
      value: null,
      source: "Banco Central do Brasil",
      updatedAt: null,
      status: "offline",
      unit: "percent",
    };
  }
}
