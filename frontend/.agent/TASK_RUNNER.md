# TASK RUNNER

## Obiettivo

Eseguire automaticamente lo sprint corrente.

## Workflow

1. Leggere:
   - BOOTSTRAP.md
   - PROJECT_BRAIN.md
   - START.md
   - RULES.md
   - ARCHITECTURE.md
   - WORKFLOW.md
   - SPRINT.md
   - STOP_RULES.md
   - memory/NEXT_TASK.md

2. Analizzare il codice esistente.

3. Riutilizzare componenti, servizi e moduli già presenti.

4. Modificare solo i file strettamente necessari.

5. Eseguire:

   npm run build

6. Se la build fallisce:

   - correggere gli errori;
   - ricompilare;

   Ripetere fino a build pulita.

7. Aggiornare:

   - CHANGELOG.md
   - PROJECT_STATUS.md
   - memory/HANDOVER.md
   - memory/CURRENT_SESSION.md

8. Verificare:

   git status

9. Se il repository è coerente:

   git add .
   git commit
   git push

10. Terminare.
