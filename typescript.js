module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off', // lagt til etter oppgradering til eslint 7.
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-deprecated': 'warn',
  },
  plugins: ['@typescript-eslint', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: ".",
    sourceType: "module",
    project: "./tsconfig.json"
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {
        "alwaysTryTypes": true,
        "paths": "./tsconfig.json"
      }
    }
  }
}
