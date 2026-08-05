import PortfolioWorkspace from "./PortfolioWorkspace";
import RealEstateRentalAnalysis from "./RealEstateRentalAnalysis";
import RealEstateFlipAnalysis from "./RealEstateFlipAnalysis";

interface InvestmentWorkspaceProps {
  profileId: string;
  onProfileChange: (profileId: string) => void;
}

export default function InvestmentWorkspace({
  profileId,
  onProfileChange,
}: InvestmentWorkspaceProps) {
  return (
    <>
      <PortfolioWorkspace
        profileId={profileId}
        onProfileChange={onProfileChange}
      />

      <RealEstateRentalAnalysis />

      <RealEstateFlipAnalysis />
    </>
  );
}
