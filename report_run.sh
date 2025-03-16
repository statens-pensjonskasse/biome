echo Generer rapport for Biome

npx biome check --reporter=github --config-path=./node_modules/@statens-pensjonskasse/biome/biome.json > tmp

./node_modules/@statens-pensjonskasse/biome/report_generate.sh tmp report-$(date +%Y-%m-%d).md

rm tmp