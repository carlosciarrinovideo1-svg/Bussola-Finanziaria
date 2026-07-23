import { appConfig } from "../config/appConfig";

function Header() {
  return (
    <header>
      <h1>🧭 {appConfig.appName}</h1>

      <p>Versione {appConfig.version}</p>

      <hr />
    </header>
  );
}

export default Header;