import {
  loadDashboard,
} from "../dashboard/dashboardService";

import type {
  TaxRule,
} from "../taxation";


const exampleTaxRule: TaxRule = {
  id: "dashboard-tax-example",
  name: "Regola fiscale esempio",
  country: "BR",
  minimumDurationMonths: 0,
  taxRate: 15,
};


export default function Dashboard() {

  const data =
    loadDashboard(
      exampleTaxRule
    );


  return (
    <div>

      <h1>
        {data.title}
      </h1>


      <h2>
        {data.scenarioName}
      </h2>


      <p>
        Capitale iniziale:
        {" "}
        {data.initialCapital}
      </p>


      <p>
        Valore finale:
        {" "}
        {data.finalValue}
      </p>


      <p>
        Profitto lordo:
        {" "}
        {data.grossProfit}
      </p>


      <p>
        Tasse:
        {" "}
        {data.taxAmount}
      </p>


      <p>
        Profitto netto:
        {" "}
        {data.netProfit}
      </p>


      <h3>
        Suggerimenti
      </h3>


      <ul>
        {
          data.suggestions.map(
            suggestion => (
              <li key={suggestion}>
                {suggestion}
              </li>
            )
          )
        }
      </ul>

    </div>
  );
}
