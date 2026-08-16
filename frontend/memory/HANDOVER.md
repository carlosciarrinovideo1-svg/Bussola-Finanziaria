# Bussola Finanziaria - Handover

## Stato Repository

Branch:
feature/BF-0071-continuity-kit

Sprint completato:
BF-0106 - Rendere `bf` autonomo nella gestione dello sprint

## Stato Git

Il working tree principale deve rimanere pulito al termine dello sprint.

## Stato Progetto

BF-0106 ha completato l'evoluzione degli strumenti di continuità:

- `bf next` rileva la relazione tra ultimo commit e sprint corrente;
- la memoria operativa viene verificata contro lo stato del repository;
- `bf sandbox` crea una worktree Git separata;
- la sandbox viene creata fuori dal perimetro del repository principale;
- build, lint e `git diff --check` sono integrati nella verifica automatizzata.

## Sprint Corrente

BF-0107 - Prossimo incremento funzionale

Stato:
DA DEFINIRE

## Regole Operative

1. verificare lo stato tramite gli strumenti `bf`;
2. mantenere memoria e repository sincronizzati;
3. usare la sandbox per sperimentazioni isolate;
4. modificare il codice applicativo solo quando richiesto dallo sprint;
5. completare ogni sprint con build, lint, documentazione, commit e push.
