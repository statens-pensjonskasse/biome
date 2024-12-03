echo Generer rapport for Biome

npx biome check --reporter=github --config-path=./node_modules/@spk/biome/biome-all.json > tmp

./node_modules/@spk/biome/report_generate.sh tmp report.md

rm tmp