export interface MarketData {
  value: number | null;
  source: string;
  updatedAt: string | null;
  status: "ok" | "offline";
}