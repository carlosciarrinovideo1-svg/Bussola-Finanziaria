import {calculateFlip} from "../realEstate";

export default function RealEstateFlipAnalysis(){

const r=calculateFlip({
purchasePrice:300000,
renovationCost:50000,
sellingPrice:420000,
taxes:15000
});

return(
<section>
<h2>🔨 Flip Immobiliare</h2>
<p>Utile lordo: R$ {r.grossProfit.toFixed(2)}</p>
<p>Utile netto: R$ {r.netProfit.toFixed(2)}</p>
<p>ROI: {r.roi.toFixed(2)}%</p>
</section>
);
}
