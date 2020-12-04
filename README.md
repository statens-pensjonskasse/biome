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

