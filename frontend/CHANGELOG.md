# CHANGELOG

## BF-0001

Inizializzazione progetto React + TypeScript + Vite.

---

## BF-0002

Prima Dashboard.

---

## BF-0003

Componentizzazione della Dashboard.

---

## BF-0004

Layout iniziale della Dashboard.

---

## BF-0005

Preparazione dell'architettura per il collegamento alle fonti dati ufficiali.

---

## BF-0005A

Creazione della documentazione tecnica del progetto.

Aggiunti:

- regole operative;
- architettura;
- decisioni progettuali;
- documentazione per la continuità dello sviluppo.

---

## BF-0006

Collegamento reale al Banco Central do Brasil.

Implementato:

- collegamento API SGS;
- recupero dato SELIC reale;
- separazione Dashboard → Services → API.

---

## BF-0007

Creazione della Dashboard professionale SELIC.

Aggiunti:

- valore SELIC;
- stato Online/Offline;
- fonte dati;
- data aggiornamento.

---

## BF-0008

Creazione del componente riutilizzabile MarketIndicator.

Obiettivo:

Permettere la visualizzazione uniforme di diversi indicatori finanziari senza duplicare codice.

---

## BF-0009

Implementazione del CDI.

Implementato:

- nuova API CDI tramite Banco Central do Brasil;
- collegamento nel Service;
- visualizzazione tramite MarketIndicator;
- mantenimento dell'architettura esistente.

Fonte utilizzata:

Banco Central do Brasil - Serie SGS 4389.

---

## BF-0010

Implementazione IPCA.

Implementato:

- nuova API IPCA tramite Banco Central do Brasil;
- collegamento nel Service;
- visualizzazione tramite MarketIndicator;
- mantenimento dell'architettura esistente.

Fonte utilizzata:

Banco Central do Brasil - Serie SGS 433.

Formato:

Variazione mensile IPCA.

---

## BF-0011

Implementazione cambio USD.

Implementato:

- nuova API USD tramite Banco Central do Brasil;
- collegamento nel Service;
- visualizzazione tramite MarketIndicator;
- mantenimento dell'architettura esistente.

Fonte utilizzata:

Banco Central do Brasil - Serie SGS 1.

Formato:

Cambio giornaliero USD/BRL.

---

## BF-0012

Implementazione cambio EUR.

Implementato:

- nuova API EUR tramite Banco Central do Brasil;
- collegamento nel Service;
- visualizzazione tramite MarketIndicator;
- mantenimento dell'architettura esistente.

Fonte utilizzata:

Banco Central do Brasil - Serie SGS 21619.

Formato:

Cambio giornaliero EUR/BRL.

---

## BF-0013

Ottimizzazione struttura indicatori finanziari.

Implementato:

- gestione unità dinamica nel componente MarketIndicator;
- distinzione tra indicatori percentuali e cambi valutari;
- miglioramento architettura MarketData.

Obiettivo:

Preparazione della base tecnica per future simulazioni e portafoglio investimenti.

---

## BF-0015

Preparazione simulazioni finanziarie.

Implementato:

- nuova struttura dedicata alle simulazioni;
- definizione dei tipi SimulationInput e SimulationResult;
- creato motore iniziale di calcolo investimenti;
- creato servizio simulationService per separare logica e visualizzazione;
- mantenuta architettura modulare del progetto.

Struttura creata:

- src/simulations;
- src/services/simulationService.ts.

Obiettivo:

Preparare la base tecnica per future simulazioni finanziarie integrate nella Dashboard.

---

## BF-0016

Integrazione simulazioni nella Dashboard.

Implementato:

- creato il componente InvestmentSimulation;
- collegata la simulazione finanziaria alla Dashboard;
- integrazione con simulationService;
- utilizzo del motore Investment Calculator;
- gestione degli input utente:
  - capitale iniziale;
  - versamento mensile;
  - durata investimento;
  - rendimento annuo;
- visualizzazione dei risultati:
  - totale investito;
  - profitto;
  - valore finale.

Struttura creata:

- src/components/InvestmentSimulation.tsx.

Obiettivo:

Aggiungere la prima funzione interattiva di simulazione finanziaria mantenendo separata la logica di calcolo dall'interfaccia utente.

Preparazione per future estensioni:

- portafoglio investimenti;
- diversificazione;
- confronto scenari;
- analisi finanziarie avanzate.

