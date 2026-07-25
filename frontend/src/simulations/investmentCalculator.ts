import type {
  SimulationInput,
  SimulationResult,
} from "./types";

export function calculateInvestment(
  input: SimulationInput
): SimulationResult {
  const months = input.years * 12;

  const monthlyRate =
    input.annualRate / 100 / 12;

  let balance = input.initialCapital;

  for (let i = 0; i < months; i++) {
    balance += input.monthlyContribution;
    balance *= 1 + monthlyRate;
  }

  const totalInvested =
    input.initialCapital +
    input.monthlyContribution * months;

  return {
    totalInvested,
    profit: balance - totalInvested,
    finalValue: balance,
  };
}
