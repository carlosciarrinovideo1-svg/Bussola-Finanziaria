# RULES

- uno sprint = un obiettivo
- modifiche minime
- nessuna duplicazione
- usare i service esistenti
- mantenere l'architettura
- build obbligatoria
- repository pulito a fine sprint

## Raggruppamento comandi

Quando si forniscono istruzioni operative da terminale:

- raggruppare più comandi compatibili in un unico comando sequenziale;
- preferire comandi unici che completano un'intera operazione (esempio: modifica file + build + controllo);
- evitare di suddividere passaggi che possono essere eseguiti insieme senza aumentare il rischio;
- separare i comandi solo quando esiste una motivazione tecnica chiara (esempio: necessità di verificare un risultato prima del comando successivo, rischio di perdita dati, operazioni irreversibili o dipendenze tra passaggi).

Obiettivo:
ridurre passaggi manuali, velocizzare il flusso di lavoro e diminuire possibilità di errore umano.
