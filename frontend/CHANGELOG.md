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
