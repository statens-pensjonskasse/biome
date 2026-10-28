### Tips og tricks med Biome

# 🚿 Lyst på en kald dusj?

- Bytt ut `biome.json` med denne filen:
```json
{
  "extends": ["@statens-pensjonskasse/biome/config"],
  "linter": {
    "rules": {
      "all": true,
      "nursery": {
        "all": true
      }
    }
  }
}
```

- Kjør `npx biome check` for å få en kald dusj.
  - Alternativt kan du kjøre `npx biome check --reporter=summary` for å få en kort oppsummering av hva som er galt.

# 🥷 Lyst å fikse mye svakheter i koden?

- Ta konfigurasjonen fra 👆 og legg i `biome.json`.
- Kjør `npm run lint:code` for å fikse alt som er mulig å fikse automatisk.
- Hvis du føler deg litt tøff og heldig, kjør `npm run lint:code -- --unsafe`.


# 🧠 Lyst til å få bedre opplevelse med biome?

1. Lag et strengere regelsett for IDE
   - Kopier over `biome.json` til `biome-ci.json`.
     - Oppdater skriptet ditt for `lint:ci` til `npx biome check --config-path biome-ci.json`.
       - Bytt ut rules i `biome.json` til denne:

         ```json
         "rules": {
             "recommended": true
         }
         ```

2. Installer `Biome` i din IDE.
   - [VSCode](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)
     - [Intellij](https://plugins.jetbrains.com/plugin/22761-biome)
       - [3dje parts tjenester](https://biomejs.dev/guides/editors/third-party-extensions/) for andre IDEer som `vim`, `emacs`, `sublime` osv
3. Sett opp [GIT hooks](https://biomejs.dev/recipes/git-hooks/) for å sikre lint ved commits
4. Sett opp [Renovate](https://biomejs.dev/recipes/renovate/) for å sikre at `biome.json` oppdateres med nye regler
5. Eksperimenter med [kodesøk via biome](https://biomejs.dev/reference/gritql/)
