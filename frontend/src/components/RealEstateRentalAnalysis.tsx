import {
  getDefaultRealEstate,
  calculateRealEstate,
  analyzeRealEstate,
} from "../realEstate";

export default function RealEstateRentalAnalysis() {
  const investment = getDefaultRealEstate();
  const result = calculateRealEstate(investment);
  const notes = analyzeRealEstate(investment);

  return (
    <section>
      <h2>🏠 Investimento Immobiliare</h2>

      <p>Rendimento lordo: {result.grossYield.toFixed(2)}%</p>
      <p>Reddito annuo netto: R$ {result.netAnnualIncome.toFixed(2)}</p>
      <p>Recupero capitale: {result.paybackYears.toFixed(1)} anni</p>

      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </section>
  );
}
