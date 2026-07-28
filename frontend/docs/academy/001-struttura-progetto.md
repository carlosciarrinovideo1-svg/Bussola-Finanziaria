# 001 - Struttura del progetto

## Obiettivo

Bussola Finanziaria è organizzata in moduli indipendenti.
Ogni modulo ha una responsabilità precisa e comunica con gli altri attraverso servizi e tipi condivisi.

## Regole principali

- Ogni nuova funzionalità deve avere una struttura chiara.
- Ogni modifica deve essere verificata con project-check.
- Ogni sprint termina con commit, push e repository pulito.

## Struttura principale

src/
- api: collegamenti con fonti dati esterne
- components: elementi grafici React
- investments: logica investimenti
- taxation: logica fiscale
- portfolio: gestione portafoglio
- projections: proiezioni
- scenarios: scenari finanziari
- advisor: suggerimenti e analisi
- services: servizi condivisi

## Filosofia

La Bussola Finanziaria non deve prevedere il futuro.
Deve aiutare l'utente a comprendere dati, scenari e conseguenze delle proprie decisioni.
