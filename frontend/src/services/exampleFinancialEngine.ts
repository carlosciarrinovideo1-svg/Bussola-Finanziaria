import {
  calculateFinancialEngine,
} from "./financialEngineService";

import type {
  Investment,
} from "../investments";

import type {
  TaxRule,
} from "../taxation";

export function createExampleFinancialResult() {

  const investment: Investment = {
    id: "engine-example-001",
    name: "Investimento esempio",
    initialCapital: 100000,
    durationMonths: 24,
    annualGrossRate: 10,
    capitalization: "compound",
  };

  const taxRule: TaxRule = {
    id: "tax-engine-example-001",
    name: "Regola fiscale esempio",
    country: "BR",
    minimumDurationMonths: 0,
    taxRate: 15,
  };

  return calculateFinancialEngine(
    investment,
    taxRule
  );
}
