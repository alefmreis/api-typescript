module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  env: {
    es6: true,
    node: true,
  },
  extends: ['plugin:@typescript-eslint/recommended'],
};