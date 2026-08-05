interface MetricBadgeProps {
  label: string;
  value: string | number;
}

export default function MetricBadge({
  label,
  value,
}: MetricBadgeProps) {
  return (
    <p>
      <strong>{label}:</strong>{" "}
      {value}
    </p>
  );
}
