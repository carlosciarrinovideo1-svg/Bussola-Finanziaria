import PortfolioWorkspace from "./PortfolioWorkspace";
import InvestmentWorkspace from "./InvestmentWorkspace";

interface InvestmentComparisonWorkspaceProps {
  profileId: string;
  onProfileChange: (profileId: string) => void;
}

export default function InvestmentComparisonWorkspace({
  profileId,
  onProfileChange,
}: InvestmentComparisonWorkspaceProps) {
  return (
    <>
      <section>
        <h2>📊 Confronto Investimenti</h2>

        <p>
          Confronto tra strumenti finanziari e investimenti immobiliari.
        </p>
      </section>

      <PortfolioWorkspace
        profileId={profileId}
        onProfileChange={onProfileChange}
      />

      <InvestmentWorkspace
        profileId={profileId}
        onProfileChange={onProfileChange}
      />
    </>
  );
}
