interface RankingBadgeProps {
  position: number;
}

export default function RankingBadge({
  position,
}: RankingBadgeProps) {
  const label =
    position === 1
      ? "🥇 Primo"
      : position === 2
        ? "🥈 Secondo"
        : position === 3
          ? "🥉 Terzo"
          : `#${position}`;

  return (
    <p>
      <strong>Ranking:</strong>{" "}
      {label}
    </p>
  );
}
