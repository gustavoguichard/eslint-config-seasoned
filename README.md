## Installation

```
yarn add -D eslint-config-seasoned
```

You'll also need to install these dependencies:

```
yarn add -D eslint-config-airbnb-base eslint-config-universe
```

## Setup

create a `.eslintrc.js` file to the root of the app with the following content:

```js
module.exports = {
    extends: 'eslint-config-seasoned',
}
```

To avoid conflicts, delete your own `.prettierrc`. You can still overwrite your eslint rules if you want to change the way prettier behaves by it to `.eslintrc.js` like so:

```js
rules: {
  'global-require': 2,
  'prettier/prettier': ['error', { jsxBracketSameLine: false }],
}
```

You can still overwrite the `env`, `globals` and `parser` in your local
`.eslintrc.js`. But if you keep doing so, consider opening an issue or Pull Request
at `eslint-config-seasoned` with your proposal.

## ESLint and Prettier

-   This ESLint configuration should work together with prettier, thanks to [eslint-plugin-prettier](prettier.io/docs/en/eslint.html#use-eslint-to-run-prettier)

-   For better development experience, use it with [prettier-atom](https://github.com/prettier/prettier-atom) plugin.
