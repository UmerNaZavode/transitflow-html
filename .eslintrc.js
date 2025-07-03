const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ['*.js'],
      extends: ['eslint:recommended', 'prettier'],
      rules: {
        'no-unused-vars': 'warn',
        'no-console': 'warn',
        'prefer-const': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-template': 'error',
        'template-curly-spacing': 'error',
        'arrow-spacing': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'indent': ['error', 2],
        'max-len': ['warn', { code: 100 }],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
  ignorePatterns: [
    'dist/',
    'build/',
    'node_modules/',
    '*.min.js',
  ],
};

