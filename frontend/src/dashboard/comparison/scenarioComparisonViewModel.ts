import type {
  DashboardViewModel,
} from "../viewModel";


export interface ScenarioComparisonViewModel {

  scenarioName: string;

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

      finalValue:
        dashboard.finalValue,

      netProfit:
        dashboard.netProfit,

    })
  );

}
