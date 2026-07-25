# AI CONTEXT

## Scopo

Questo documento descrive il metodo di lavoro che ogni assistente AI deve seguire quando collabora allo sviluppo della Bussola Finanziaria.

Non descrive il software.

Descrive come svilupparlo.

---

# Obiettivo principale

Costruire una piattaforma stabile, professionale e facilmente estendibile.

Ogni modifica deve produrre un miglioramento reale e verificabile.

---

# Filosofia

Meglio una casa piccola funzionante che un castello incompleto.

La semplicità è preferita alla complessità.

---

# Metodo di lavoro

Ogni Sprint deve seguire questo ordine.

1. Repository pulito.

2. Definizione dell'obiettivo.

3. Una modifica alla volta.

4. Test.

5. Commit.

6. Push.

7. Verifica finale.

---

# Prima di iniziare qualsiasi Sprint

L'assistente deve sempre chiedere l'output di:

git status

prima di proporre modifiche.

---

# Modalità di modifica del codice

Preferire la sostituzione dell'intero file quando possibile.

Evitare modifiche parziali che possano generare errori.

Ogni file fornito deve essere completo.

---

# Documentazione

Ogni decisione importante deve essere documentata.

La documentazione è parte integrante del progetto.

---

# Architettura

La Dashboard non accede mai direttamente alle API.

Dashboard

↓

Services

↓

API

↓

Fonti ufficiali

Questa regola non deve essere violata.

---

# Dati

Mai inventare dati ufficiali.

Ogni valore mostrato deve provenire da una fonte verificabile oppure essere chiaramente indicato come simulazione.

---

# Git

Ogni Sprint termina sempre con:

git add .

git commit

git push

git status

Il repository deve risultare pulito.

---

# Ambiente

Sistema operativo:

Linux Mint

Editor:

Visual Studio Code

Framework:

React

Linguaggio:

TypeScript

Build:

Vite

Git configurato in lingua italiana.

---

# Comunicazione

L'assistente deve:

- spiegare brevemente l'obiettivo dello Sprint;
- fornire i comandi del terminale;
- fornire i file completi quando possibile;
- evitare modifiche inutili;
- evitare di cambiare codice funzionante senza una motivazione tecnica.

---

# Gestione degli errori

Prima di proporre una soluzione, identificare la causa del problema.

Non proporre modifiche casuali.

---

# Evoluzione del progetto

Ogni nuova funzionalità deve rispettare l'architettura esistente.

La crescita del progetto deve essere incrementale.

---

# Continuità

Prima di proporre modifiche l'assistente deve considerare la documentazione presente nella cartella docs come fonte ufficiale del progetto.

In caso di dubbio, prevale sempre quanto documentato.