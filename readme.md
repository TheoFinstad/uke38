# Harry Potter Karakterer

## Oversikt
Denne nettsiden lar brukeren søke etter karakterer fra Harry Potter-universet. Ved hjelp av et API vises relevant informasjon som navn, bilde, hus, blodstatus, patronus, fødselsår, og skuespilleren som spilte karakteren.

## Hvordan fungerer programmet?
- Brukeren skriver inn navnet på en karakter i søkefeltet.
- Ved å trykke "Enter" vil nettsiden hente informasjon fra API-et og vise det på skjermen.
- Hvis ingen karakter blir funnet, får brukeren en feilmelding.

## Implementasjon
Nettsiden er laget ved bruk av HTML for struktur, CSS for styling og JavaScript for funksjonalitet. Dataene hentes fra `https://hp-api.onrender.com/` ved hjelp av JavaScript's `fetch()` metode. 

## Teknologier brukt
- **HTML**: Strukturen på nettsiden.
- **CSS**: Design og styling.
- **JavaScript**: Dynamisk funksjonalitet og datahenting fra API-et.
- **API**: `https://hp-api.onrender.com/` for karakterdata.

## Funksjoner / Funksjonalitet
- Søkefelt for å skrive inn karakterens navn.
- Dynamisk visning av karakterens data når søket fullføres.
- Feilmeldinger vises hvis karakteren ikke finnes.

## Skjermbilde
Legg til et skjermbilde av nettsiden din når den fungerer som den skal.

## Lenker og kilder brukt
- [Harry Potter API](https://hp-api.onrender.com/)
- [Fargeverktøy fra Adobe](https://color.adobe.com/nb/)

## Design
Nettsiden har et Hogwarts-inspirert design med bruk av blå og hvite fargetoner for å skape en magisk følelse. Jeg brukte Adobe Color Wheel for å sikre god kontrast og tilgjengelighet.

## Egenvurdering
Hvis jeg skulle gjort noe annerledes, ville jeg lagt til flere interaktive funksjoner som muligheten til å sortere karakterene etter hus. Jeg ville også vurdert å bruke mer avanserte biblioteker som React for enklere UI-håndtering.

## Kilder
- Harry Potter API-dokumentasjon: `https://hp-api.onrender.com/`
- UU-retningslinjer for tilgjengelighet: `https://www.uutilsynet.no`
