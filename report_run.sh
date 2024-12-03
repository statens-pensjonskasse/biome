echo Generer rapport for Biome

npx biome check --reporter=github --config-path=./biome-all.json > tmp

./report_generate.sh tmp report.md

rm tmp