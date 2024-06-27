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
    'eslint-comments/require-description': 'off',
    'linebreak-style': ['error', 'unix'],
    'no-console': 'error',
    'no-redeclare': 'off',
    'no-restricted-imports': ['error'],
    'no-undef': 'off',
    'no-unused-vars': 'off',
  },
};
