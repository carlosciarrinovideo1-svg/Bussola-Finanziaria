import type {
  DashboardViewModel,
} from "../viewModel";


export interface ScenarioComparisonViewModel {

  scenarioName: string;

  description: string;

  expectedAnnualRate: number;

  finalValue: number;

  netProfit: number;

}


export function createScenarioComparisonViewModel(
  dashboards: DashboardViewModel[],
): ScenarioComparisonViewModel[] {

  return dashboards.map(
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

    })
  );

}
