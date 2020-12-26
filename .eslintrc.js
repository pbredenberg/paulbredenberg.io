module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  // To enable features such as async/await
  parserOptions: { ecmaVersion: 8 },
  // We don't want to lint generated files nor node_modules, but we want to lint
  // .prettierrc.js (ignored by default by eslint)
  ignorePatterns: [
    'node_modules/*',
    '.next/*',
    '.out/*',
    '!.prettierrc.js',
    '!.eslintrc.js',
  ],
  extends: ['eslint:recommended'],
  rules: {
    semi: ['error', 'always'],
    indent: ['error', 2],
    'max-len': ['error', { 'code': 100 }],
    'spaced-comment': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single'],
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-max-props-per-line': [
      1,
      {
        'maximum': 1,
      },
    ],
  },
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
      ],
      rules: {
        // We will use TypeScript's types for component props instead
        'react/prop-types': 'off',

        // No need to import React when using Next.js
        'react/react-in-jsx-scope': 'off',

        // This rule is not compatible with Next.js's <Link /> components
        'jsx-a11y/anchor-is-valid': 'off',

        // Why would you want unused vars?
        '@typescript-eslint/no-unused-vars': ['error'],

        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
      },
    },
  ],
};
