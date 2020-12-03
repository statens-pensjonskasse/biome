module.exports = {
  rules: {
    semi: [2, "always"],
    'no-console': 2,
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          'puma-components/dist/**', // hindrer direkte importering av mapper i puma-components
        ],
      },
    ],
  }
};

