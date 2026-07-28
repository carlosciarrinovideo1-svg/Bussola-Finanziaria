interface FinancialCardProps {
  label: string;
  value: number;
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
        {value.toLocaleString("it-IT", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
    </div>
  );
}
