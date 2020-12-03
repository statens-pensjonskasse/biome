module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off', // lagt til etter oppgradering til eslint 7.
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser'
}
