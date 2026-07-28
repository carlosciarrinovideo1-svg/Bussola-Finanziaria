interface FinancialCardProps {
  label: string;
  value: string;
}

export default function FinancialCard({
  label,
  value,
}: FinancialCardProps) {

  return (
    <div className="financial-card">
      <strong className="financial-card-label">
        {label}
      </strong>

      <p className="financial-card-value">
        {value}
      </p>
    </div>
  );
}
