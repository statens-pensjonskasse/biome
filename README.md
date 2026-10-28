# Felles SPK kode regler for TypeScript, JSON, JS, JSX, og React

# `@statens-pensjonskasse/biome`

[![Build and Publish](https://github.com/statens-pensjonskasse/biome/actions/workflows/publish.yaml/badge.svg)](https://github.com/statens-pensjonskasse/biome/actions/workflows/publish.yaml)
[![GitHub Package](https://img.shields.io/github/v/release/statens-pensjonskasse/biome?label=package)](https://github.com/statens-pensjonskasse/biome/pkgs/npm/biome)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Bibliotek for regler som kan brukes på tvers av applikasjoner i SPK

## Hvorfor

1. Forenkle oppsett av nye applikasjoner
2. Felles grunnlag for kodestil og standarder
3. Oppdatere regler på tvers av bibliotek, moduler og applikasjoner
4. Gi utviklere bedre verktøy for å produsere kode med høy kvalitetene

### Sette opp biome? Gå [hit](./MIGRATION.md)

### Eksempel bruk i prosjekt

#### Egne overrides gjøres direkte til `biome.json`

```json
{
  "extends": ["@statens-pensjonskasse/biome/config"],
  "linter": {
    "rules": {
      "suspicious": {
        "noExplicitAny": "off"
      }
    }
  }
}
```

# 📐 [Alle regler med dokumentasjon](https://biomejs.dev/linter/rules/)

# Praktiske kommandoer med biome

### Oppsummert kvalitetssjekk av koden:

```sh
npx biome check --reporter=summary
```

### Lint forskjell mot main/master branch:

Krever `{"vcs": { "enabled": true, "clientKind": "git", "defaultBranch": "main" }}` i `biome.json`

```sh
npx biome check --changed
```

### Lint staged changes for commit:

```sh
npx biome check --staged
```


# Hvorfor ikke `eslintrc`?

## Ytelse

Biome tilbyr betydelig bedre ytelse sammenlignet med ESLint:
Ifølge ytelsestester er Biomes formateringshastighet opptil **25 ganger raskere** enn Prettier.
Biomes linting er omtrent **15 ganger raskere** enn ESLint på en MacBook Pro M1.

I praktiske tester har brukere rapportert dramatiske hastighetsforberinger. En utvikler noterte at Prettier + ESLint + Stylelint tok 10,12 sekunder, mens Biome + Stylelint tok bare 1,49 sekunder (der Biome selv tok kun 66ms).

## Forenklet oppsett og konfigurasjon

Biome gir en mer strømlinjeformet oppsettsprosess:
1. Det krever kun installasjon av én avhengighet, noe som erstatter behovet for separate ESLint, Prettier og diverse plugins.
2. Biome bruker én enkelt konfigurasjonsfil for både formatering og linting, noe som forenkler prosjektoppsettet.
3. Initialiseringsprosessen er enkel, og krever vanligvis bare to kommandoer: installasjon og initialisering.

## Enhetlig verktøy

Biome kombinerer flere funksjoner i ett verktøy:
1. Det fungerer som en formatterer, linter og analysator i én pakke.
2. Denne enhetlige tilnærmingen eliminerer behovet for å avstemme motstridende regler mellom separate formaterings- og lintingverktøy.

## Innebygd TypeScript-støtte

Biome tilbyr innebygd støtte for TypeScript uten behov for ytterligere plugins eller konfigurasjon.

## Moderne funksjoner

Biome inkluderer noen moderne funksjoner som standard:
1. Det sorterer automatisk imports, en funksjon som ofte krever ytterligere plugins med ESLint.
2. Biome kan sortere Tailwind CSS-klasser, noe som erstatter behovet for separate Tailwind-spesifikke plugins.

## Aktiv utvikling og fellesskapsstøtte

Selv om Biome er nyere enn ESLint, er det under aktiv utvikling:
1. Det kom ut som vinneren av en konkurranse for å lage en raskere JavaScript-formatterer, noe som indikerer dets potensial og interesse i utviklermiljøet.
2. Prosjektet har et aktivt fellesskap og forbedres kontinuerlig.

## Brukervennlighet

Mange utviklere rapporterer at Biome er enklere å bruke og konfigurere:
1. Konfigurasjonen beskrives som "superenkel" sammenlignet med det ofte komplekse oppsettet av ESLint og Prettier.
2. Biomes regler er tydelig dokumentert og lett tilgjengelige, noe som gjør det enklere å forstå hva som anvendes på koden din.


# Hvorfor ikke bruke `Biome`?

Det er viktig å merke seg at Biome fortsatt er et relativt nytt verktøy sammenlignet med det veletablerte ESLint.

Det har kanskje ikke full funksjonalitetsparitet, bare 97%, eller det omfattende økosystemet av plugins som ESLint tilbyr.

Noen utviklere har rapportert at det føles ufullstendig på visse områder, med manglende støtte for LESS, SCSS, YAML, GraphQL og noen avanserte funksjoner for import-sortering.

# Overbevist? 

Gå [hit](./MIGRATION.md) for å sette opp Biome.

## License

MIT License - see [LICENSE](./LICENSE) file for details.
