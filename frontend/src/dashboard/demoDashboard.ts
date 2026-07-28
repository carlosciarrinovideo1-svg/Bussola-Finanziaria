import type {
  TaxRule,
} from "../taxation";


export const exampleTaxRule: TaxRule = {
  id: "dashboard-tax-example",
  name: "Regola fiscale esempio",
  country: "BR",
  minimumDurationMonths: 0,
  taxRate: 15,
};
