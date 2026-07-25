# PROJECT MANUAL
## Bussola Finanziaria

---

# 1. IDENTITÀ DEL PROGETTO

Nome:

Bussola Finanziaria

Versione attuale:

0.2.0

Stato:

In sviluppo

Sistema:

React + TypeScript + Vite

Sistema operativo principale:

Linux Mint

Repository:

GitHub

---

# 2. OBIETTIVO

Realizzare una piattaforma finanziaria professionale capace di raccogliere dati economici ufficiali, elaborarli e fornire strumenti di simulazione, pianificazione e supporto alle decisioni finanziarie.

Il progetto dovrà crescere nel tempo mantenendo un'architettura semplice, ordinata e facilmente estendibile.

---

# 3. FILOSOFIA

Regola principale del progetto:

> Meglio una casa piccola funzionante che un castello incompleto.

Ogni Sprint deve produrre un miglioramento concreto e verificabile.

---

# 4. PRINCIPI

• repository sempre pulito

• una modifica alla volta

• un file alla volta

• test dopo ogni modifica

• commit

• push

---

# 5. ARCHITETTURA

Dashboard

↓

Services

↓

API

↓

Fonti ufficiali

La Dashboard non deve mai chiamare direttamente le API.

---

# 6. STRUTTURA DEL PROGETTO

components/

Contiene i componenti React riutilizzabili.

api/

Contiene esclusivamente il collegamento con le fonti ufficiali.

services/

Contiene la logica che collega l'interfaccia alle API.

types/

Contiene tutte le interfacce TypeScript.

config/

Configurazioni dell'applicazione.

pages/

Pagine dell'applicazione.

utils/

Funzioni di supporto.

hooks/

Custom Hooks.

assets/

Immagini e risorse statiche.

---

# 7. COMPONENTI

Header

Responsabile dell'intestazione.

Dashboard

Organizza la pagina principale.

Card

Componente riutilizzabile per visualizzare sezioni.

MarketIndicator

Visualizza un indicatore finanziario.

---

# 8. CSS

App.css

Foglio di stile principale del progetto.

Responsabile del layout generale.

Non contiene logica.

Non contiene dati.

---

# 9. DOCUMENTAZIONE

Il progetto mantiene documentazione permanente.

Ogni decisione importante deve essere registrata.

---

# 10. ROADMAP

Sprint completati:

BF-0001

BF-0002

BF-0003

BF-0004

BF-0005

BF-0005A

BF-0006

BF-0007

BF-0008

Sprint futuri:

BF-0008A

BF-0009

BF-0010

BF-0011

BF-0012

---

# 11. LEZIONI APPRESE

Questa sezione verrà aggiornata dopo ogni Sprint.

Conterrà:

• problemi risolti

• errori da evitare

• miglioramenti

• motivazioni delle decisioni

---

# 12. OBIETTIVO A LUNGO TERMINE

Costruire una piattaforma finanziaria stabile, professionale e facilmente estendibile che possa essere mantenuta e sviluppata anche a distanza di anni.