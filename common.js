module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:eslint-comments/recommended'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    semi: [2, 'always'],
    'no-console': 'error',
    'linebreak-style': ['error', 'unix'],
    'eslint-comments/require-description': ['error', { ignore: [] }],
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          'puma-components/dist/**', // hindrer direkte importering av mapper i puma-components
        ],
      },
    ],
  },
};
