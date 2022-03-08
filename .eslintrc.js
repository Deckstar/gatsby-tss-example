module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    'react',
    'simple-import-sort',
    'import',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-console': 'warn',
    'no-confusing-arrow': 0,
    'no-else-return': 0,
    'no-return-assign': [2, 'except-parens'],
    'no-underscore-dangle': 0,
    camelcase: 0,
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'class-methods-use-this': 0,
    'no-restricted-syntax': 0,
    'no-param-reassign': ['error', { props: false }],
    'react/prop-types': 0,
    'react/no-multi-comp': 0,
    'react/jsx-filename-extension': 0,
    'react/no-unescaped-entities': 0,

    'import/no-extraneous-dependencies': 0,

    'react/destructuring-assignment': 0,

    'arrow-body-style': 0,
    'no-nested-ternary': 0,
    '@typescript-eslint/no-shadow': ['error', { hoist: 'never' }],
    'import/no-unresolved': 0,

    /*
     * simple-import-sort seems to be the most stable import sorting currently,
     * disable others
     */
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'import/order': 'off',

    'import/no-deprecated': 'warn',
    'import/no-duplicates': 'error',
  },
};
