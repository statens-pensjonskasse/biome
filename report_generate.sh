#!/bin/bash

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 INPUT_FILE OUTPUT_FILE"
    exit 1
fi

input_file="$1"
output_file="$2"

# Function to count occurrences of a pattern
count_occurrences() {
    local pattern="$1"
    local file="$2"
    grep -c "$pattern" "$file"
}

convert_to_kebab_case() {
    local str="$1"
    # First replace camelCase with dash separation, then convert to lowercase
    echo "$str" | sed -E 's/([a-z0-9])([A-Z])/\1-\2/g' | tr '[:upper:]' '[:lower:]'
}

# Count total diagnostics
total_errors=$(grep "::error" "$input_file" |
    sed 's/.*title=\([^,]*\),.*/\1/' |
    grep -v "^format\|^organizeImports\|^parse" |
    wc -l)
total_warnings=$(grep -c "::warning" "$input_file")
total=$((total_errors + total_warnings))

# Initialize report
cat > "$output_file" << EOF
# Code Quality Report

# Summary

  **Total diagnostics:** $total

  **Code errors:** $total_errors

  **Code warnings:** $total_warnings

  **Code security:** 0

  **fixable:** $(grep -c "format" "$input_file")

## Code Issues

### Errors by Category

| Category | Rule | Count |
|-----------|------|-------|
EOF

# Process errors by category
grep "::error" "$input_file" |
sed 's/.*title=\([^,]*\),.*/\1/' |
sort | uniq -c |
while read -r count rule; do
    category=$(echo "$rule" | cut -d'/' -f1)
    rulename=$(echo "$rule" | cut -d'/' -f2-)
    rulenamekebab=$(convert_to_kebab_case  rulename)
    # Skip format, parse and organizeImports categories
	if [ "$category" != "format" ] && [ "$category" != "organizeImports" ] && [ "$category" != "parse" ]; then
		echo "| $category | [\`$rulename\`](https://biomejs.dev/linter/rules/${rulenamekebab}) | $count |" >> "$output_file"
	fi
done

# Add warnings section
cat >> "$output_file" << EOF

### Warnings by Category

| Category | Rule | Count |
|-----------|------|-------|
EOF

# Process warnings by category
grep "::warning" "$input_file" |
sed 's/.*title=\([^,]*\),.*/\1/' |
sort | uniq -c |
while read -r count rule; do
    category=$(echo "$rule" | cut -d'/' -f1)
    rulename=$(echo "$rule" | cut -d'/' -f2-)
    echo "| $category |[\`$rulename\`](https://biomejs.dev/linter/rules/${rulename}) | $count |" >> "$output_file"
done

