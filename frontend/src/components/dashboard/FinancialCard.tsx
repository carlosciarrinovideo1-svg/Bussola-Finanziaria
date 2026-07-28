import {
  formatCurrency,
} from "../../utils/formatters";


interface FinancialCardProps {
  label: string;
  value: number;
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
        {formatCurrency(value)}
      </p>

    </div>
  );
}
