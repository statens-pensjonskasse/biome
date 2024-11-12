# Biome migrasjon

Vi ønsker å bruke lint til å forbedre kodekvaliteten over tid, litt etter litt.
Strategien er å etablere dagens kodestandard i `biome.json`, hvor dagens kvalitet i koden passerer linting, og jobbe med å fjerne regel-bruddene vi må gjøre for å få koden til følge flere av reglene.

Dette gjør at vi kan minimere risikoen og konsekvensene med å gjøre endringer i lint verktøyet. Med et enkelt migreringsverktøy som vist under gjør det også at vi kan jobbe videre med kodekvaliteten uten at dette går ut over andre aktiviteter.

## Bibliotek i Nexus som brukes:
1. [@spk/biome](https://git.spk.no/projects/SHIPIT/repos/biome/browse)
2. [@spk/stylelint-base](https://git.spk.no/projects/SHIPIT/repos/stylelint-base/browse)
3. [@spk/stylelint-less](https://git.spk.no/projects/SHIPIT/repos/stylelint-less/browse)
4. [@spk/stylelint-scss](https://git.spk.no/projects/SHIPIT/repos/stylelint-scss/browse)


## Migrere et prosjekt til Biome:
I rot av prosjektet på `main`/`master` branch kjør:
```
npx @spk/standardize
```
Følg instruksene i terminalen, så har du basis oppsettet installert.

**Verktøyet gjør følgende:**
1. Installerer `@spk/biome` i prosjektet
2. Kjører en `biome check` med alle reglene skrudd på
3. Fanger alle regler som feiler `biome check` og legger dem i `biome.json` som `"off"`
4. Migrerer `prettier` konfigurasjonen til `biome.json`
5. Formatterer koden med `biome format --write`
6. Sjekker om det er behov for `stylelint` i prosjektet (`less` eller `scss`)
7. Installerer `@spk/stylelint-{less,scss}` hvis det er behov for det
8. Fanger alle regler som feiler `stylelint` og legger dem i `.stylelintrc.json` som `null`
9. Spør om du vil fjerne unødvendige filer (`.prettierrc`, `.eslintrc`, `.eslintignore`, …)
10. Legger inn `lint` og `format` script i `package.json`
11. Setter sammen en rapport med alle feilene som ble oppdaget i `CODE_QUALITY_REPORT.md` med lenker til dokumentasjonen for hver regel
12. Spytter ut alle endringene med git status: dette skal hovedsaklig være filer som nå blir formatert, filer som er tatt bort, nye konfigurasjonsfiler og nye dependendencies for biome og stylelint 

Hvis du vil inspisere koden som kjører i CLI verktøyet, kan du [gjøre det her](https://git.spk.no/projects/SHIPIT/repos/standardize/browse/src/cli.ts).

Etter installasjonen kan du kjøre:
```bash
npm run format # Formatterer koden
npm run format:code # Formatterer koden, uten stylesheets
npm run format:style # Formatterer stylesheets
npm run lint # Sjekker at koden passerer linting
npm run lint:code # Sjekker at koden passerer linting, og at det ikke er noen regel-brudd.
npm run lint:style # Sjekker at stylesheets passerer linting.
npm run lint:staged # Sjekker de endringene som er staged i git.
npm run lint:changed # Sjekker de endringene som er gjort i branchen mot default branchen.
npm run lint:ci # Sjekker at koden passerer linting, og feiler ikke når det er ingen filer å sjekke.
```

Inspiser `biome.json` lokalt i prosjektet for å se hvilke regler som er skrudd av.

## Lint i pipeline

I arbeidet med å sette opp dette verkøyet har vi gått gjennom en del prosjekter for å se hvordan dette vil fungere i praksis. Vi ser at det er forskjeller på om linting er en del av pipeline eller ikke, hvorvidt  stylelint er brukt og om eslint kjører uten feil i prosjektet.

Dette er noe vi ønsker å få standardisert over tid. 
Da kan vi sikre en god arbeidsflyt for å levere høyere kodekvalitet i alle prosjekter.

Med prinsippet om at LINT config skal passerer koden som er i produksjon i dag, muliggjør vi å legge lint av kode inn i pipeline i alle prosjekt. 

**Ved å legge inn LINT i pipeline, vil vi kunne sikre at nye feil ikke kommer inn i koden.**

## Forbedre kodekvalitet over tid

1. Sett opp lint som del av pipeline i alle prosjekter
2. Gå gjennom alle prosjekter og rette opp de regel-brudne linjene som ikke er i Biome-konfigurasjonen
    - a. Enten ta regel for regel som gir mest verdi
    - b. Legg inn en streng versjon i pipeline, men bare lint endringene som er gjort.


# 🚨 Kjente feil i migrasjonsscriptet

### Eksisterende `stylelint-` plugins er ikke alltid satt opp riktig i prosjekt. 
Dersom `npx stylelint **/*.{css,scss,less} -f json` svarer med feil før JSON vil migrasjon for stylelint feile i verktøyet. 
Du må sjekke om du har `stylelint-{plugin}` installert i `package.json` og at denne ikke produserer en feil. 

    👨‍🔧 Feilen løses ved å skru av reglene for gitte plugin
-  sett regler for `{plugin}/rule-name` i `.stylelintrc.json` til `null`, og så kjøre migrasjonen igjen.


## Eksempel prosjekter hvor vi har testet ut endringer:

    ⚠️ Disse kodeendringene ble gjort for å danne basis for Biome migrasjonsverktøyet.

| Prosjekt | Pull-request | Hadde stylelint? | Stylelint | Overrides | Lint i pipeline |
| --- | --- | --- | --- | --- | --- |
| [spk-intern-designsystem](https://git.spk.no/projects/PU_AFL/repos/spk-intern-designsystem) | [PR-283](https://git.spk.no/projects/PU_AFL/repos/spk-intern-designsystem/pull-requests/283/overview) | 🔴 | stylelint-less | 34 | ? |
| [rekonstruksjon](https://git.spk.no/projects/PU_AFL/repos/rekonstruksjon)| [PR-404](https://git.spk.no/projects/PU_AFL/repos/rekonstruksjon/pull-requests/404/overview) | 🔴 | stylelint-less | 12 | 👍 |
| [spkweb-msm-pensjon](https://git.spk.no/projects/MSM_MMED/repos/spkweb-msm-pensjon) | [PR-310](https://git.spk.no/projects/MSM_MMED/repos/spkweb-msm-pensjon/pull-requests/310/overview) | 🔴 | stylelint-scss | 56 | ? |
| [spkweb-designsystem](https://git.spk.no/projects/EPI/repos/spkweb-designsystem) | [PR-296](https://git.spk.no/projects/EPI/repos/spkweb-designsystem/pull-requests/296/overview) | 👍 | stylelint-scss | 37 |  ? |
| [spkweb-kom-dialog-mfe](https://git.spk.no/projects/DIALOG/repos/spkweb-kom-dialog-mfe) | [PR-162](https://git.spk.no/projects/DIALOG/repos/spkweb-kom-dialog-mfe/pull-requests/162/overview) | 👍 | stylelint-scss | 25 | ? |
| [arbeidsliste-web](https://git.spk.no/projects/PU_AFL/repos/arbeidsliste-web) | [PR-487](https://git.spk.no/projects/PU_AFL/repos/arbeidsliste-web/pull-requests/487/overview) | 👍 | stylelint-less | 25 |  ? |
| [nav-data](https://git.spk.no/projects/PU_AFL/repos/nav-data) | [PR-289](https://git.spk.no/projects/PU_AFL/repos/nav-data/pull-requests/289/overview) | 👍 | stylelint-less | 19 |  👍 |
| [spk-api-gateway](https://git.spk.no/projects/FRONT/repos/spk-api-gateway) | [PR-105](https://git.spk.no/projects/FRONT/repos/spk-api-gateway/pull-requests/105/overview) | - | - | 8 |  👍 |
| [beregnetpensjon](https://git.spk.no/projects/FRONT/repos/beregnetpensjon) | [PR-342](https://git.spk.no/projects/FRONT/repos/beregnetpensjon/pull-requests/342/overview) |  👍 | stylelint-less | 16 |  👍 |
| [rettighet](https://git.spk.no/projects/FRONT/repos/rettighet) | [PR-202](https://git.spk.no/projects/FRONT/repos/rettighet/pull-requests/202/overview) |  🔴 | stylelint-less | 6 |  👍 |
| [detaljvisning](https://git.spk.no/projects/FRONT/repos/detaljvisning) | [PR-303](https://git.spk.no/projects/FRONT/repos/detaljvisning/pull-requests/303/overview) | 👍 | stylelint-less | 12 |  👍 |
| [analyser](https://git.spk.no/projects/FRONT/repos/analyser) | [PR-1658](https://git.spk.no/projects/FRONT/repos/analyser/pull-requests/1658/overview) | 👍 | stylelint-less | 35 |  👍 |
| [kodeverk](https://git.spk.no/projects/FRONT/repos/kodeverk) | [PR-311](https://git.spk.no/projects/FRONT/repos/kodeverk/pull-requests/311/overview) | 👍 | stylelint-less | 8 |  👍 |
| [inntektsopplysninger-web](https://git.spk.no/projects/PU_AFL/repos/inntektsopplysninger-web/) | [PR-416](https://git.spk.no/projects/PU_AFL/repos/inntektsopplysninger-web/pull-requests/158/diff) | 🔴 | stylelint-less | 27 |  👍 |

