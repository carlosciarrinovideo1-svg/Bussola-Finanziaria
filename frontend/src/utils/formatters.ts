export function formatCurrency(
  value: number
): string {

  return value.toLocaleString(
    "it-IT",
    {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }
  );
}


export function formatNumber(
  value: number
): string {

  return value.toLocaleString(
    "it-IT",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  );
}


export function formatPercentage(
  value: number
): string {

  return `${value.toLocaleString(
    "it-IT",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  )}%`;
}
