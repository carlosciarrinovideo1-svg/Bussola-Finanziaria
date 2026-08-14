import {
  calculateInvestment,
} from "../calculator";

import type {
  Investment,
} from "../types";

import type {
  InvestmentDecisionMetrics,
} from "./types";


export function generateInvestmentMetrics(
  investment: Investment,
  benchmarkRate?: number | null,
): InvestmentDecisionMetrics {

  const result = calculateInvestment(investment);

  const benchmarkResult =
    benchmarkRate !== null &&
    benchmarkRate !== undefined
      ? calculateInvestment({
          ...investment,
          annualGrossRate: benchmarkRate,
        })
      : null;

  const benchmarkDifference =
    benchmarkResult !== null
      ? result.finalValue - benchmarkResult.finalValue
      : null;

  const benchmarkDifferencePercent =
    benchmarkResult !== null &&
    benchmarkResult.finalValue !== 0
      ? (benchmarkDifference! /
          benchmarkResult.finalValue) *
        100
      : null;

  const benchmarkPosition =
    benchmarkResult === null
      ? null
      : result.finalValue > benchmarkResult.finalValue
        ? "above"
        : result.finalValue < benchmarkResult.finalValue
          ? "below"
          : "equal";

  return {
    name: investment.name,
    initialCapital: result.initialCapital,
    finalValue: result.finalValue,
    grossProfit: result.grossProfit,
    returnPercentage:
      (result.grossProfit / result.initialCapital) * 100,
    risk:
      investment.durationMonths <= 12
        ? "basso"
        : investment.durationMonths <= 24
          ? "medio"
          : "alto",

    liquidity:
      investment.durationMonths <= 12
        ? "alta"
        : investment.durationMonths <= 24
          ? "media"
          : "bassa",

    benchmarkFinalValue:
      benchmarkResult !== null
        ? benchmarkResult.finalValue
        : null,

    benchmarkDifference,

    benchmarkDifferencePercent,

    benchmarkPosition,
  };
}
