interface FinancialCardProps {
  label: string;
  value: string;
}

export default function FinancialCard({
  label,
  value,
}: FinancialCardProps) {

  return (
    <div>
      <strong>
        {label}
      </strong>

      <p>
        {value}
      </p>
    </div>
  );
}
