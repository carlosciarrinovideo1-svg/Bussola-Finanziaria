import type {
  ProjectionScenario,
} from "./types";

import {
  createExampleProjection,
} from "./exampleProjection";

export interface ProjectionResult {
  scenario: ProjectionScenario;
  value: number;
}

export function calculateProjectionScenario(
  scenario: ProjectionScenario
): ProjectionResult {
  const projection =
    createExampleProjection();

  return {
    scenario,

    value:
      projection.netValue,
  };
}
