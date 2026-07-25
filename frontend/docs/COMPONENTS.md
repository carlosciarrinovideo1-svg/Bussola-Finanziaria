# COMPONENTS

Questo documento descrive ogni componente React presente nel progetto.

---

# Header

## Scopo

Mostrare il titolo dell'applicazione e la versione.

## Responsabilità

Solo presentazione.

---

# Dashboard

## Scopo

Organizzare tutte le sezioni della pagina principale.

## Responsabilità

Coordinare i componenti.

Non deve conoscere le API.

---

# Card

## Scopo

Visualizzare una sezione della Dashboard.

## Motivazione

Evita duplicazione del layout.

---

# MarketIndicator

## Scopo

Visualizzare un indicatore economico.

## Dati mostrati

- valore

- stato

- fonte

- data aggiornamento

## Motivazione

È stato creato per poter mostrare in futuro:

- SELIC

- CDI

- IPCA

- USD

- EUR

- qualsiasi altro indicatore.

Lo stesso componente dovrà essere riutilizzato senza duplicare codice.

---

# Evoluzione

Ogni nuovo componente dovrà essere aggiunto in questo documento.

Per ciascuno dovranno essere indicate:

- responsabilità

- motivo della creazione

- possibili miglioramenti.