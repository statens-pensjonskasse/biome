# Felles SPK ESLint regler

Bibliotek for ESLint regler som kan bruker på tvers av applikasjoner i SPK. Konfigurasjonen er delt opp i flere deler;
 * *common*: Basis oppsett
 * *typescript*: Regler for typescript
 * *react*: Regler for react
 * *sonarjs*: Statisk kodeanalyse fra Sonar (https://github.com/SonarSource/eslint-plugin-sonarjs). Finner kompleksitet og div. code smells.

Man kan bruke deler av konfigurasjon ved å bare laste inn f.eks. `@spk/eslint-config/react`, `@spk/eslint-config/common`.
Dersom man laster `@spk/eslint-config` vil alle regelsettene bli brukt.

## Hvorfor

1. Forenkle oppsett av nye applikasjoner
2. Felles grunnlag for kodestil
3. Oppdatere ESLint regler på tvers av bibliotek

## Oppsett

1. `npm i --save-dev @spk/eslint-config` (+ evt. peerDependencies som trengs)
2. Sett inn `@spk/eslint-config` under `extends` i den lokale ESLint konfigurasjon
3. Man kan overskrive og legge til regler lokalt som man trenger
4. Plugins som brukes av biblioteket må installeres: `npm install eslint-plugin-prettier eslint-plugin-react eslint-plugin-sonarjs eslint-plugin-eslint-comments --save-dev`

## Eksempel .eslintrc
### Enkel (js)
```javascript
module.exports = {
  extends: ['@spk/eslint-config'],
};
```

### Egne overrides (json)

```json
{
  "extends": [
    "@spk/eslint-config"
  ],
  "rules": {
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/triple-slash-reference": "off"
  }
}
```
