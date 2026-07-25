# ARCHITECTURE

## Scopo

Questo documento descrive l'architettura della Bussola Finanziaria.

Non spiega il codice.

Spiega il motivo delle scelte progettuali.

---

# Principio fondamentale

Ogni componente deve avere una sola responsabilità.

La logica deve essere separata dalla presentazione.

---

# Struttura

Dashboard

↓

Components

↓

Services

↓

API

↓

Fonti ufficiali

---

# Dashboard

La Dashboard organizza la pagina.

Non conosce il funzionamento delle API.

Non effettua chiamate HTTP.

---

# Components

I componenti mostrano informazioni.

Devono essere riutilizzabili.

Devono contenere meno logica possibile.

---

# Services

I Services rappresentano il collegamento tra l'interfaccia e le API.

La Dashboard utilizza sempre i Services.

Mai le API direttamente.

---

# API

Le API parlano con le fonti ufficiali.

Ogni API ha una sola responsabilità.

Se una fonte cambia, si modifica solamente l'API interessata.

---

# Types

Tutti gli oggetti condivisi devono essere definiti nella cartella types.

Questo evita errori e duplicazioni.

---

# Config

Contiene esclusivamente configurazioni.

Mai logica.

Mai dati temporanei.

---

# CSS

La grafica è separata dalla logica.

Il layout generale è gestito da App.css.

Gli stili dei componenti potranno essere separati in futuro.

---

# Evoluzione prevista

Con l'aumento dei componenti sarà possibile suddividere ulteriormente il progetto senza modificare l'architettura principale.