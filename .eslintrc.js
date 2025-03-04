// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  env: {
    node: true,
  },
  extends: ["expo", "prettier"],
  ignorePatterns: ["/dist/*"],
  rules: {
    "prettier/prettier": "warn",
  },
};
