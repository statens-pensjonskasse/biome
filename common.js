module.exports = {
  extends: ['plugin:eslint-comments/recommended'],
  plugins: ['prettier'],
  rules: {
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'no-console': 'error',
    'linebreak-style': ['error', 'unix'],
    'eslint-comments/require-description': ['error', { ignore: [] }],
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
