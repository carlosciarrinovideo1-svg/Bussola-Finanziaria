interface MetricHighlightProps {
  label: string;
  value: string | number;
}

export default function MetricHighlight({
  label,
  value,
}: MetricHighlightProps) {
  return (
    <div>
      <strong>{label}</strong>
      <h4>{value}</h4>
    </div>
  );
}
