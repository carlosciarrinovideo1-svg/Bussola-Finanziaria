# DECISIONS

## Decisione 001

La struttura del progetto utilizzerà:

- React;
- TypeScript;
- Vite.

Motivazione:

- semplicità di sviluppo;
- velocità;
- manutenzione futura.

---

## Decisione 002

La Dashboard sarà separata dai servizi e dalle API.

Architettura:

Dashboard → Services → API → Fonti ufficiali

Motivazione:

- separazione delle responsabilità;
- facilità di estensione;
- riduzione della duplicazione del codice.

---

## Decisione 003

Gli indicatori finanziari utilizzeranno un componente comune:

MarketIndicator.

Motivazione:

- visualizzazione uniforme;
- possibilità di aggiungere nuovi indicatori senza creare nuovi componenti.

---

## Decisione 004

La SELIC sarà implementata utilizzando la serie SGS 432 del Banco Central do Brasil.

Formato scelto:

Percentuale annuale.

Motivazione:

- fonte ufficiale;
- coerenza con gli indicatori finanziari;
- integrazione diretta con API SGS.

---

## Decisione 005

Il CDI sarà implementato utilizzando la serie SGS 4389 del Banco Central do Brasil.

Formato scelto:

CDI annualizzato.

Motivazione:

- mantenere coerenza con la visualizzazione della SELIC;
- mostrare agli utenti un valore espresso in percentuale annua;
- utilizzare una fonte ufficiale.

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
- riutilizzare l'architettura Dashboard → Services → API.

Nota:

A differenza di SELIC e CDI, l'IPCA rappresenta una variazione mensile e non un tasso annuale.

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
- mantenere uniformità con gli altri indicatori.

Nota:

Il valore rappresenta il cambio di 1 USD espresso in BRL.

---

## Decisione 008

Il cambio EUR sarà implementato mantenendo la stessa architettura utilizzata per gli altri indicatori finanziari.

Fonte:

Banco Central do Brasil tramite API SGS.

Serie utilizzata:

SGS 21619.

Formato scelto:

Cambio giornaliero EUR/BRL.

Motivazione:

- utilizzare una fonte ufficiale;
- mostrare il valore dell'euro in reais brasiliani;
- mantenere uniformità con il cambio USD;
- riutilizzare il componente MarketIndicator esistente.

Nota:

Il valore rappresenta il cambio di 1 EUR espresso in BRL.

---

## Decisione 009

Gli indicatori finanziari utilizzeranno un sistema di unità differenziato.

Implementato:

- aggiunta proprietà unit nel modello MarketData;
- distinzione tra valori percentuali e valori valutari;
- visualizzazione dinamica tramite MarketIndicator.

Unità supportate:

- percent → SELIC, CDI, IPCA;
- brl → USD/BRL, EUR/BRL.

Motivazione:

- evitare visualizzazioni errate dei cambi valutari con simbolo percentuale;
- mantenere un componente unico e riutilizzabile;
- preparare la struttura per future valute e indicatori.
