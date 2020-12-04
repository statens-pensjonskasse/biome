module.exports = {
  extends:[
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier'],
  rules: {
    semi: [2, "always"],
    'no-console': 'error',
    'linebreak-style': ['error', 'unix'],
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

