module.exports = {
  extends: [
    "plugin:prettier/recommended",
    "plugin:eslint-comments/recommended",
  ],
  plugins: ["prettier"],
  rules: {
    semi: [2, "always"],
    "no-console": "error",
    "linebreak-style": ["error", "unix"],
    "eslint-comments/require-description": ["error", { ignore: [] }],
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          "puma-components/dist/**", // hindrer direkte importering av mapper i puma-components
        ],
      },
    ],
  },
};
