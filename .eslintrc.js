// https://docs.expo.dev/guides/using-eslint/

export const module = {
  env: {
    node: true,
  },
  extends: ["expo", "prettier"],
  ignorePatterns: ["/dist/*"],
  rules: {
    "prettier/prettier": "warn",
    "no-console": "warn",
    "no-unused-vars": "error",
    "eqeqeq": "error",
    "prefer-const": "error",
    "no-var": "error",
    "camelcase": "error"

  },
};