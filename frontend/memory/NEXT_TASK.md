# NEXT TASK

## Sprint corrente

BF-0103 - Collegamento del confronto investimenti al flusso finanziario

Stato: COMPLETATO

## Stato precedente

BF-0101 - Rendere completo e coerente il confronto scenari vs CDI

Stato: COMPLETATO

## Risultati BF-0102

- Integrazione coerente dei componenti della Dashboard in un flusso finanziario continuo;
- Riorganizzazione della Dashboard per seguire il percorso: profilo → portafoglio → rischio → simulazione → confronto → benchmark CDI → decisione;
- Aggiunti `PortfolioSummary` e `PortfolioRiskIndicator` al flusso, riutilizzando i servizi esistenti;
- Rimosse duplicazioni di componenti immobiliari (già inclusi in `InvestmentWorkspace`);
- Aggiornati gli import e la logica della Dashboard senza introdurre nuove dipendenze;
- Build e controlli `git diff --check` superati; commit e push completati.

## Risultati BF-0103

- sostituito il confronto statico `compareInvestments()` nel componente Dashboard;
- collegato `InvestmentComparisonDashboard` al sistema reale dei profili di portafoglio;
- utilizzato `comparePortfolioProfiles()` come sorgente dei dati di confronto;
- collegato il profilo selezionato dalla Dashboard al confronto investimenti;
- propagato il `MarketSnapshot` dalla Dashboard;
- integrato il CDI corrente come benchmark nel confronto del profilo selezionato;
- mantenute le proiezioni a 6/12/24 mesi già disponibili nel servizio portfolio;
- rimossa la precedente visualizzazione basata su valori statici a rendimento zero;
- build verificata;
- controllo `git diff --check` verificato;
- commit e push completati.

## Prossimo passo

Definire BF-0104 sulla base dello stato aggiornato del progetto, senza modificare codice prima di aver individuato il prossimo incremento funzionale reale.
