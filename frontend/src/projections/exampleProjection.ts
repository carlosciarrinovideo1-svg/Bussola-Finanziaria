import {
  calculateInvestmentProjection,
} from "../services/investmentProjectionService";

import type {
  Investment,
} from "../investments";

import type {
  TaxRule,
} from "../taxation";

export function createExampleProjection() {
  const investment: Investment = {
    id: "example-001",
    name: "Investimento esempio",
    initialCapital: 100000,
    durationMonths: 24,
    annualGrossRate: 10,
    capitalization: "compound",
  };

  const taxRule: TaxRule = {
    id: "tax-example-001",
    name: "Regola fiscale esempio",
    country: "BR",
    minimumDurationMonths: 0,
    taxRate: 15,
  };

  return calculateInvestmentProjection(
    investment,
    taxRule
  );
}
