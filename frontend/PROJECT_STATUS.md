# PROJECT STATUS

## Nome progetto

Bussola Finanziaria

---

## Versione

0.2.0

---

## Stato

🟢 In sviluppo

Repository con modifiche dello Sprint BF-0013 completate in preparazione al commit.

---

## Ultimo Sprint completato

BF-0013

Ottimizzazione struttura indicatori finanziari.

---

## Sprint in corso

BF-0013

Ottimizzazione struttura indicatori finanziari.

---

## Ultimo Commit

BF-0012

Implementazione cambio EUR.

---

## Architettura

✔ React

✔ TypeScript

✔ Vite

✔ Dashboard

✔ Services

✔ API

✔ Documentazione

---

## Componenti disponibili

✔ Header

✔ Dashboard

✔ Card

✔ MarketIndicator

---

## Fonti dati collegate

✔ Banco Central do Brasil

SELIC

CDI

IPCA

USD

EUR

---

## Funzionalità disponibili

✔ Dashboard

✔ SELIC reale

✔ CDI reale

✔ IPCA reale

✔ Cambio USD reale

✔ Cambio EUR reale

✔ Stato Online/Offline

✔ Fonte ufficiale

✔ Data aggiornamento

✔ Gestione unità indicatore

✔ Visualizzazione dinamica percentuale/BRL

---

## Struttura dati indicatori

Implementato:

✔ proprietà unit nel modello MarketData

Unità supportate:

- percent → SELIC, CDI, IPCA
- brl → USD/BRL, EUR/BRL

Obiettivo:

Separare correttamente indicatori percentuali e cambi valutari mantenendo un componente MarketIndicator unico e riutilizzabile.

---

## Funzionalità pianificate

✔ CDI

✔ IPCA

✔ Cambio USD

✔ Cambio EUR

✔ Struttura indicatori finanziari

□ Simulazioni

□ Portafoglio investimenti

□ Avvisi ufficiali

□ Impostazioni avanzate

---

## Repository

Lo Sprint BF-0013 è stato completato.

Prima del commit il repository contiene le modifiche relative a:

- aggiornamento modello MarketData;
- gestione unità percentuale/valuta;
- aggiornamento API indicatori;
- miglioramento componente MarketIndicator;
- aggiornamento documentazione.

Dopo il commit e il push il repository dovrà risultare pulito con:

git status

↓

non c'è nulla di cui eseguire il commit, l'albero di lavoro è pulito

---

## Prossimo Sprint

BF-0014

Prima implementazione simulazioni finanziarie.

---

## Regola

Questo documento deve essere aggiornato al termine di ogni Sprint.

Deve rappresentare sempre una fotografia reale dello stato del progetto.
