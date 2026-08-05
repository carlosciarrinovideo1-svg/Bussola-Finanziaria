import PortfolioProfileSelector from "./PortfolioProfileSelector";
import PortfolioSummary from "./PortfolioSummary";
import PortfolioSimulation from "./PortfolioSimulation";
import PortfolioIntelligence from "./PortfolioIntelligence";
import PortfolioRiskIndicator from "./PortfolioRiskIndicator";
import PortfolioProfileComparison from "./PortfolioProfileComparison";
import PortfolioHistory from "./PortfolioHistory";

interface PortfolioWorkspaceProps {
  profileId: string;
  onProfileChange: (profileId: string) => void;
}

export default function PortfolioWorkspace({
  profileId,
  onProfileChange,
}: PortfolioWorkspaceProps) {
  return (
    <>
      <PortfolioProfileSelector
        value={profileId}
        onChange={onProfileChange}
      />

      <PortfolioSummary
        profileId={profileId}
      />

      <PortfolioSimulation
        profileId={profileId}
      />

      <PortfolioIntelligence
        selectedProfile={profileId}
      />

      <PortfolioRiskIndicator
        profileId={profileId}
      />

      <PortfolioProfileComparison
        selectedProfile={profileId}
      />

      <PortfolioHistory
        profileId={profileId}
      />
    </>
  );
}
