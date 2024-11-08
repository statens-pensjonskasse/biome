# Biome migrasjon

Vi ønsker å bruke lint til å forbedre kodekvaliteten over tid, litt etter litt.
Vi etablerer dagens kodestandard i `biome.json`, hvor dagens kvalitet i koden passerer linting, 
og jobber deretter med å fjerne regel-bruddene vi må gjøre for å få koden til å passere linting.

Dette gjør at vi kan jobbe videre med kodekvaliteten uten at det går ut over andre aktiviteter.


## Bibliotek i Nexus som brukes:
1. [@spk/biome](https://git.spk.no/projects/SHIPIT/repos/biome/browse)
2. [@spk/stylelint-base](https://git.spk.no/projects/SHIPIT/repos/stylelint-base/browse)
3. [@spk/stylelint-less](https://git.spk.no/projects/SHIPIT/repos/stylelint-less/browse)
4. [@spk/stylelint-scss](https://git.spk.no/projects/SHIPIT/repos/stylelint-scss/browse)

## Eksisterende pull-requests for å dra endringene inn i prosjektene:
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



## Å gjøre endringer i prosjektene selv:
I rot av prosjektet kjør:
```
npx @spk/standardize
```
Følg instruksene i terminalen, så har du basis oppsettet installert.


## Forbedre kodekvalitet over tid

1. Sett opp lint som del av pipeline i alle prosjekter
2. Gå gjennom alle prosjekter og rette opp de regel-brudne linjene som ikke er i Biome-konfigurasjonen
    a. Enten ta regel for regel som gir mest verdi
    b. Legg inn en streng versjon i pipeline, men bare lint endringene som er gjort.