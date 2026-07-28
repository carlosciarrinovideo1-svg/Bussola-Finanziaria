import type {
  DashboardViewModel,
} from "../../dashboard";


export interface ScenarioComparisonItem {

  scenarioName: string;

  finalValue: number;

  netProfit: number;

}


export function createScenarioComparisonItems(
  dashboards: DashboardViewModel[],
): ScenarioComparisonItem[] {

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
