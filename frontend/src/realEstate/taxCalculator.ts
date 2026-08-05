export interface RentalTaxInput {
  annualRent: number;
  taxRate: number;
}

export function calculateRentalTax(input: RentalTaxInput) {
  return input.annualRent * (input.taxRate / 100);
}
