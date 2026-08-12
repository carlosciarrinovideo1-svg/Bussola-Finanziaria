# AI AGENTS — BUSSOLA FINANZIARIA

## Scopo

Questo documento definisce il sistema multi-agente utilizzato per
sviluppare Bussola Finanziaria.

Il progetto NON deve dipendere dalla memoria di una singola AI,
di una singola estensione VS Code o di un singolo provider.

La memoria permanente del progetto è il repository.

---

# 1. SISTEMA MULTI-AGENTE

## Agente operativo principale

Roo Code

Responsabilità:

- implementazione;
- modifica dei file;
- esecuzione dei comandi;
- test;
- correzione degli errori;
- build;
- preparazione del commit;
- aggiornamento dello stato.

## Agente di backup

Continue

Utilizzato quando l'agente principale raggiunge limiti,
rate limit o indisponibilità.

## Agente di revisione/supporto

GitHub Copilot Chat

Utilizzato per revisione, analisi e supporto quando disponibile
gratuitamente.

## Supervisione

ChatGPT

Responsabilità:

- architettura;
- priorità;
- decisioni tecniche;
- controllo qualità;
- supervisione dello sviluppo.

---

# 2. CONTINUITÀ

La memoria permanente NON è la conversazione dell'agente.

La memoria permanente è costituita da:

- `.agent/`
- `memory/`
- `docs/`
- Git
- codice sorgente.

Un agente deve poter essere sostituito senza perdere il lavoro.

Prima di iniziare deve leggere lo stato del progetto e utilizzare
il repository come fonte di verità.

---

# 3. ROTAZIONE DEGLI AGENTI

Ordine preferenziale:

1. Roo Code
2. Continue
3. GitHub Copilot Chat
4. altro agente gratuito compatibile

Se l'agente corrente raggiunge:

- limite token;
- rate limit;
- limite giornaliero;
- quota gratuita;
- indisponibilità del modello;

passare a un altro agente gratuito.

NON acquistare automaticamente crediti.

NON attivare automaticamente abbonamenti.

---

# 4. REGOLA COSTO ZERO

Bussola Finanziaria deve essere sviluppata e mantenuta senza costi
obbligatori.

È vietato introdurre automaticamente:

- API a pagamento;
- servizi con abbonamento;
- crediti AI a pagamento;
- provider con consumo a pagamento;
- database a pagamento;
- servizi cloud a pagamento;
- servizi finanziari a pagamento;
- fonti dati che richiedono pagamento.

Sono ammessi esclusivamente:

- strumenti gratuiti;
- API gratuite;
- fonti ufficiali gratuite;
- servizi con piano gratuito sufficiente;
- soluzioni locali/offline gratuite.

Se un servizio gratuito raggiunge un limite:

1. cercare un'alternativa gratuita;
2. utilizzare un'altra fonte gratuita;
3. utilizzare un fallback locale/offline;
4. segnalare il problema.

NON attivare mai automaticamente un servizio a pagamento.

Qualsiasi eventuale costo deve essere approvato esplicitamente
dall'utente prima dell'utilizzo.

---

# 5. FONTI DATI

Priorità assoluta:

1. fonte ufficiale gratuita;
2. API ufficiale gratuita;
3. fonte pubblica gratuita affidabile;
4. fallback locale/offline.

Non utilizzare una fonte a pagamento quando esiste una soluzione
gratuita adeguata.

Non inventare dati.

---

# 6. BLOCCO FUNZIONALE

Non procedere con micro-sprint artificialmente piccoli.

Quando più modifiche appartengono alla stessa funzionalità,
costruirle come un unico blocco coerente.

Flusso:

analisi rapida
→ implementazione
→ integrazione
→ verifica
→ correzione
→ verifica finale
→ documentazione
→ commit
→ push

---

# 7. VERIFICA

Ogni blocco deve terminare con:

npm run build

git diff --check

controllo TypeScript

controllo import

controllo duplicazioni

controllo funzionalità esistenti

git status

commit

push

---

# 8. NON DUPLICAZIONE

Prima di creare un componente, service, calculator, provider,
API, type o funzione:

cercare ciò che esiste già.

Riutilizzare il codice esistente quando coerente.

Non creare seconde implementazioni della stessa funzione.

---

# 9. ARCHITETTURA

Mantenere la separazione:

UI
→ Service
→ Provider
→ Calculator
→ API
→ Fonte dati

Non spostare arbitrariamente la logica tra livelli.

Non rifare l'architettura senza necessità.

---

# 10. CDI

Il CDI è un benchmark.

Il CDI NON deve sostituire automaticamente il rendimento
dello scenario selezionato.

Scenario e benchmark devono rimanere separati.

---

# 11. AUTONOMIA

L'agente deve correggere autonomamente:

- errori TypeScript;
- import rotti;
- errori di build;
- errori evidenti di integrazione;
- piccoli problemi di refactoring.

Non chiedere conferma per decisioni tecniche non bloccanti.

Richiedere conferma solo per decisioni architetturali,
funzionali o di prodotto realmente ambigue.

---

# 12. HANDOFF

Prima di interrompere un lavoro, quando possibile, aggiornare:

memory/NEXT_TASK.md

Indicando:

- cosa è completato;
- cosa è in corso;
- problemi;
- prossimo passo;
- ultime verifiche eseguite.

Il nuovo agente deve riprendere da questo stato.

---

# 13. REPOSITORY

Il repository deve rimanere recuperabile.

Non lasciare:

- codice corrotto;
- import rotti;
- modifiche evidentemente incomplete;
- configurazioni temporanee non documentate;
- duplicazioni evitabili.

Se una modifica rompe una funzionalità esistente,
correggerla prima del commit.

---

# 14. PRIORITÀ DEL PROGETTO

1. Funzionalità reale.
2. Correttezza dei dati.
3. Integrazione.
4. Stabilità.
5. Utilità per l'utente.
6. Esperienza utente.
7. Grafica raffinata.
8. Multilingua.

Prima la casa funzionante.

Poi le finiture.

---

# 15. OBIETTIVO

Costruire rapidamente una Bussola Finanziaria:

- funzionante;
- coerente;
- verificabile;
- recuperabile;
- estendibile;
- gratuita.

La continuità dipende dal repository,
non dalla disponibilità di un singolo agente.

## 16. COMANDO UNICO DI HANDOFF

Per trasferire il lavoro da un agente all'altro utilizzare:

`./scripts/bf-agent-handoff.sh`

Il comando raccoglie in un'unica esecuzione:

- repository;
- branch;
- stato Git;
- `memory/NEXT_TASK.md`;
- agente principale;
- agenti di fallback;
- regola costo zero.

Il nuovo agente deve utilizzare questo stato come punto di ingresso
e continuare il lavoro senza ripetere verifiche già concluse.

## 17. CONTRATTO OPERATIVO CONDIVISO

Questo documento è il contratto operativo comune di tutti gli agenti.

Ogni agente che lavora sul progetto deve:

1. leggere questo documento;
2. leggere `memory/NEXT_TASK.md`;
3. utilizzare Git come fonte di verità;
4. continuare dal punto già raggiunto;
5. non ripetere verifiche già documentate;
6. non ricreare codice già esistente;
7. rispettare la regola COSTO ZERO;
8. lasciare il progetto in uno stato recuperabile per il successivo agente.

Il cambio di agente NON costituisce un nuovo sprint.

Il nuovo agente deve continuare lo stesso lavoro dal repository.

### Ordine operativo

Roo Code
→ Continue
→ GitHub Copilot Chat
→ altro agente gratuito compatibile

### Cambio agente

Il cambio avviene quando l'agente corrente:

- raggiunge un limite;
- esaurisce una quota gratuita;
- riceve un rate limit;
- diventa indisponibile;
- non è più utilizzabile gratuitamente.

Prima del cambio, quando possibile:

`./scripts/bf-agent-handoff.sh`

Il nuovo agente deve utilizzare l'output del comando come punto
di ingresso e NON ripetere l'analisi già conclusa.

### Regola fondamentale

Nessun agente deve acquistare crediti, attivare abbonamenti
o utilizzare servizi a pagamento.

Qualsiasi costo richiede approvazione esplicita dell'utente.
