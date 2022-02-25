module.exports = {
  extends: ['plugin:sonarjs/recommended'],
  plugins: ['sonarjs'],
  overrides: [
    // ESLint overrides for .ts files
    {
      files: '**/*.ts',
      rules: {
        'sonarjs/cognitive-complexity': ['error', 30],
      },
    },
    // ESLint overrides for .tsx files, react functional componants can be long
    {
      files: '**/*.tsx',
      rules: {
        'sonarjs/cognitive-complexity': ['error', 100],
      },
    },
    // ESLint for tests
    {
      files: ['tests/**/*.ts', 'tests/**/*.tsx'],
      rules: {
        'sonarjs/no-duplicate-string': 'off',
        'sonarjs/no-identical-functions': 'off',
      },
    },
  ],
};
