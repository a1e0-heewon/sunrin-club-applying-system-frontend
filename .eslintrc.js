module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: [
    "eslint:recommended", 
    "airbnb", "plugin:prettier/recommended", 
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "overrides": [
    {
      "files": ["*.js", "*.jsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": "off"
      }
    }
  ],
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
  },
};