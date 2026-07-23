import Card from "./Card";
import { appConfig } from "../config/appConfig";

function Dashboard() {
  return (
    <main>
      {appConfig.sections.map((section) => (
        <Card key={section} title={section} />
      ))}
    </main>
  );
}

export default Dashboard;