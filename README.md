# Felles SPK kode regler for TypeScript, JSON, JS og React

Bibliotek for regler som kan brukes på tvers av applikasjoner i SPK. 
Man kan bruke deler av konfigurasjon ved å bare laste inn f.eks. `@spk/eslint-config`

## Hvorfor

1. Forenkle oppsett av nye applikasjoner
2. Felles grunnlag for kodestil og standarder
3. Oppdatere regler på tvers av bibliotek, moduler og applikasjoner

## Oppsett

1. `npm i --save-dev @spk/eslint-config` (+ evt. peerDependencies som trengs)
2. Legg inn en `biome.json` i roten av prosjektet, og fylle den med dette
```json
{
  "extends": ["@spk/eslint-config"]
}
```
3. Man kan overskrive og legge til regler lokalt som man trenger

## Eksempel .eslintrc
### Enkel (js)
```javascript
module.exports = {
  extends: ['@spk/eslint-config'],
};
```

### Egne overrides gjøres direkte i `biome.json`

```json
{
  "extends": [
    "@spk/eslint-config"
  ],
  "linter":{
      "rules": {
        "suspicious": {
          "noExplicitAny": "error"
        }
    }
  }
}
```
