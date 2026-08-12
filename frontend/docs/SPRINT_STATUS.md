# Sprint Status

## Sprint completato

### BF-0074 - Portfolio Configurabile

Stato: COMPLETATO

Risultati:

- configurazione centralizzata dei portafogli;
- supporto a profili investimento;
- integrazione portfolio service;
- collegamento Dashboard -> PortfolioSummary;
- compatibilità mantenuta con codice esistente;
- build verificata;
- commit e push completati.

---

### BF-0091 - Evoluzione investimenti e supporto decisionale

Stato: COMPLETATO

Risultati:

- integrazione del calcolo investimento con lo storico evolutivo;
- supporto selezione periodo investimento (6/12/24 mesi);
- collegamento Dashboard -> InvestmentEvolutionChart;
- creazione dati demo investimento;
- generazione storico tramite motore di calcolo reale;
- introduzione metriche decisionali investimento;
- pannello confronto decisionale investimenti;
- ranking degli investimenti per rendimento;
- valutazione rischio e liquidità dinamica;
- tipizzazione livelli rischio/liquidità;
- miglioramento esportazione moduli investimento;
- build verificata;
- commit e push completati.

---

### BF-0093 - Grafici Interattivi Investimenti

Stato: COMPLETATO

Risultati:

- creazione componente grafico investimento separato;
- visualizzazione andamento storico investimento tramite SVG;
- utilizzo dei dati prodotti dal motore storico esistente;
- integrazione Dashboard -> InvestmentEvolutionChart -> InvestmentHistoryGraph;
- supporto ai periodi 6/12/24 mesi già esistenti;
- visualizzazione punti, assi e valori min/max;
- interazione dei punti tramite mouse e tastiera;
- tooltip nativo con mese e valore;
- mantenimento della separazione tra dati, logica e presentazione;
- nessuna modifica non necessaria ai servizi di calcolo;
- build verificata;
- commit e push completati.

---

## Sprint completato

### BF-0094 - Preparazione dati mercato per evoluzione investimenti

Stato: COMPLETATO

Risultati:

- introdotto `InvestmentHistoryProvider` come astrazione per la sorgente dello storico;
- introdotto `getInvestmentHistory()` come servizio di accesso allo storico;
- mantenuto il provider demo come sorgente attuale;
- separata la sorgente dei dati dalla presentazione del grafico;
- `InvestmentEvolutionChart` ora utilizza il servizio storico;
- mantenuto invariato `InvestmentHistoryGraph`;
- mantenuto invariato il motore di calcolo degli investimenti;
- struttura predisposta per future sorgenti di dati mercato reali;
- build verificata;
- controllo `git diff --check` verificato;
- commit e push completati.

---

## Sprint corrente

### BF-0095 - Prossimo sprint da definire

Stato: DA DEFINIRE

Obiettivo:

Definire il prossimo incremento funzionale sulla base dello stato attuale del progetto.


---

## Sprint completato

### BF-0101 - Rendere completo e coerente il confronto scenari vs CDI

Stato: COMPLETATO

Risultati:

- il rendimento della simulazione utilizza nuovamente il rendimento configurato dello scenario;
- il CDI è mantenuto come benchmark separato;
- visualizzazione del valore finale del benchmark CDI;
- visualizzazione della differenza assoluta rispetto al CDI;
- visualizzazione della differenza percentuale rispetto al CDI;
- visualizzazione della posizione sopra/sotto/uguale al benchmark;
- mantenuta la compatibilità con il funzionamento offline;
- mantenuta la separazione tra provider, service, calcolo e presentazione;
- build verificata;
- controllo `git diff --check` verificato;
- commit e push completati.
