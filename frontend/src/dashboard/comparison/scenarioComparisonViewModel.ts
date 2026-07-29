import type {
  DashboardViewModel,
} from "../viewModel";


export interface ScenarioComparisonViewModel {

  scenarioName: string;

  description: string;

  expectedAnnualRate: number;

  finalValue: number;

  netProfit: number;

  ranking: number;

  differenceFromBest: number;

}


export function createScenarioComparisonViewModel(
  dashboards: DashboardViewModel[],
): ScenarioComparisonViewModel[] {

  const bestValue =
    Math.max(
      ...dashboards.map(
        dashboard =>
          dashboard.finalValue
      )
    );


  return dashboards
    .map(
      dashboard => ({

        scenarioName:
          dashboard.scenarioName,

        description:
          dashboard.description,

        expectedAnnualRate:
          dashboard.expectedAnnualRate,

        finalValue:
          dashboard.finalValue,

        netProfit:
          dashboard.netProfit,

        differenceFromBest:
          bestValue - dashboard.finalValue,

        ranking: 0,

      })
    )
    .sort(
      (a, b) =>
        b.finalValue - a.finalValue
    )
    .map(
      (scenario, index) => ({

        ...scenario,

        ranking:
          index + 1,

      })
    );

}