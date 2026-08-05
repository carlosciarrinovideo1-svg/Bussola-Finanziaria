import {
  portfolioProfiles,
  portfolioProfileIds,
} from "../portfolio";


interface PortfolioProfileSelectorProps {
  value: string;
  onChange: (profileId: string) => void;
}


function PortfolioProfileSelector({
  value,
  onChange,
}: PortfolioProfileSelectorProps) {

  return (
    <section>
      <h2>🎯 Profilo investimento</h2>

      <select
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
      >
        {portfolioProfileIds.map((profileId) => (
          <option
            key={profileId}
            value={profileId}
          >
            {portfolioProfiles[profileId].name}
          </option>
        ))}
      </select>
    </section>
  );
}

export default PortfolioProfileSelector;
