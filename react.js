module.exports = {
  extends: [
    'plugin:react/recommended',
  ],
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  }
}
