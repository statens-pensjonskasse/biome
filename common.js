module.exports = {
  extends: [
    'plugin:cypress/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:eslint-comments/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    semi: [2, 'always'],
    '@typescript-eslint/no-unused-vars': 'error',
    'eslint-comments/require-description': ['error', { ignore: [] }],
    'linebreak-style': ['error', 'unix'],
    'no-console': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          'puma-components/dist/**', // hindrer direkte importering av mapper i puma-components
        ],
      },
    ],
    'no-undef': 'off',
    'no-unused-vars': 'off',
  },
};
