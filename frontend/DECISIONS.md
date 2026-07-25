# DECISIONS

## Decisione 001

La Dashboard non deve collegarsi direttamente alle fonti dati.

Motivazione:

Separare interfaccia, servizi e API rende il progetto più robusto e facile da mantenere.

---

## Decisione 002

Mai utilizzare dati simulati al posto di dati ufficiali.

Motivazione:

La Bussola Finanziaria deve essere uno strumento affidabile per prendere decisioni.

---

## Decisione 003

Ogni Sprint deve lasciare il progetto funzionante e con repository pulito.

Motivazione:

Ridurre il rischio di errori e facilitare lo sviluppo progressivo.

---

## Decisione 004

Il CDI sarà implementato mantenendo la stessa architettura utilizzata per la SELIC.

Fonte prevista:

Banco Central do Brasil tramite API SGS.

Motivazione:

- mantenere una struttura uniforme delle fonti dati;
- riutilizzare l'architettura già funzionante;
- evitare duplicazione di infrastrutture;
- mantenere separazione tra Dashboard, Services e API.

Alternativa considerata:

Utilizzo diretto di altre fonti finanziarie.

Motivazione della scelta:

Per la prima implementazione del CDI si preferisce mantenere coerenza con la fonte già integrata per la SELIC.

---

## Decisione 005

Il CDI sarà implementato utilizzando la serie SGS 4389 del Banco Central do Brasil.

Formato scelto:

CDI annualizzato.

Motivazione:

- mantenere coerenza con la visualizzazione della SELIC;
- mostrare agli utenti un valore espresso in percentuale annua;
- utilizzare una fonte ufficiale;
- evitare conversioni manuali del valore giornaliero.

Serie alternativa valutata:

SGS 12.

Motivo della scelta:

La serie SGS 12 rappresenta il CDI giornaliero e restituisce un valore non direttamente confrontabile con la SELIC visualizzata nella Dashboard.

La serie SGS 4389 permette una visualizzazione più chiara e uniforme degli indicatori finanziari.

---

## Decisione 006

L'IPCA sarà implementato mantenendo la stessa architettura utilizzata per SELIC e CDI.

Fonte:

Banco Central do Brasil tramite API SGS.

Serie utilizzata:

SGS 433.

Formato scelto:

Variazione mensile dell'IPCA.

Motivazione:

- utilizzare una fonte ufficiale;
- mantenere coerenza con gli altri indicatori finanziari;
- riutilizzare l'architettura Dashboard → Services → API;
- utilizzare il componente MarketIndicator esistente.

Nota:

A differenza di SELIC e CDI, l'IPCA rappresenta una variazione mensile e non un tasso annuale.

La visualizzazione deve quindi mantenere il simbolo percentuale senza trasformazioni manuali del valore.

---

## Decisione 007

Il cambio USD sarà implementato mantenendo la stessa architettura utilizzata per SELIC, CDI e IPCA.

Fonte:

Banco Central do Brasil tramite API SGS.

Serie utilizzata:

SGS 1.

Formato scelto:

Cambio giornaliero USD/BRL.

Motivazione:

- utilizzare una fonte ufficiale;
- mostrare il valore del dollaro in reais brasiliani;
- mantenere uniformità con gli altri indicatori;
- riutilizzare il componente MarketIndicator esistente.

Nota:

Il valore rappresenta il cambio di 1 USD espresso in BRL.
