# DEVELOPMENT WORKFLOW

## Strategia di sviluppo Bussola Finanziaria

Il progetto utilizza una metodologia progressiva orientata a:

- ridurre errori manuali;
- mantenere il controllo delle modifiche;
- garantire continuità tra sessioni diverse;
- rendere lo sviluppo ripetibile e documentato.

---

## Principio fondamentale

Ogni modifica al progetto deve seguire il ciclo:

1. Analisi della modifica.
2. Creazione o modifica del file.
3. Verifica del contenuto del file.
4. Test tecnico del progetto.
5. Commit Git.
6. Push al repository.

---

## Gestione dei file

Quando possibile, i file vengono creati o modificati fornendo il contenuto completo.

Motivazioni:

- riduzione degli errori di copia/incolla parziale;
- maggiore controllo della struttura;
- possibilità di ricostruire facilmente lo stato del progetto;
- migliore continuità nelle nuove sessioni.

---

## Automazione progressiva

Il progetto adotterà una strategia di automazione graduale.

### Applicato attualmente

Utilizzo di comandi concatenati per ridurre passaggi ripetitivi.

Esempio:

cat file && npm run build

Questo permette di:

- verificare il contenuto;
- eseguire il controllo tecnico;
- ridurre passaggi manuali.

---

## Sviluppi futuri previsti

Non automatizzare completamente il processo finché l'architettura non sarà stabile.

Possibili evoluzioni:

- script automatici di controllo progetto;
- comando unico per verifica completa;
- procedure standard per gli Sprint;
- controlli automatici prima dei commit.

---

## Principio guida

L'automazione deve ridurre gli errori senza eliminare il controllo umano.

Il compilatore verifica la correttezza tecnica.

Il controllo umano verifica la correttezza logica e progettuale.

Entrambi sono necessari.

---

## Obiettivo

Creare un metodo di sviluppo professionale, semplice da continuare nel tempo e facilmente trasferibile tra sessioni diverse.
