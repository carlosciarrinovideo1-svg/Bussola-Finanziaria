interface InvestmentComparisonGridProps {
  children: React.ReactNode;
}

export default function InvestmentComparisonGrid({
  children,
}: InvestmentComparisonGridProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "1rem",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}
