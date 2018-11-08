module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base',
    'universe',
    'prettier',
    'prettier/react',
  ],
  globals: {
    __DEV__: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  plugins: ['prettier', 'react', 'react-native'],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 0,
    'global-require': 0,
    'import/no-unresolved': 0,
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        jsxBracketSameLine: false,
        printWidth: 80,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],

    'react/display-name': 0,
    'react/prop-types': ['warn', { skipUndeclared: true }],
    semi: ['error', 'never'],
    'sort-keys': ['warn', 'asc', { caseSensitive: true, natural: true }],
  },
}
