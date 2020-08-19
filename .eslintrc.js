/** @format */

module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-floating-promises': 2,
    '@typescript-eslint/explicit-module-boundary-types': 2,
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 0,
      },
    },
  ],
};
