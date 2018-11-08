## Installation

`yarn add eslint-config-seasoned -D`

## Setup

create a `.eslintrc.js` file to the root of the app with the following content:

```json
{
  "extends": "eslint-config-seasoned"
}
```

You can still overwrite the `env`, `globals` and `parser` in your local
`.eslintrc.js`. But if you keep doing so, consider opening an issue or Pull Request
at `eslint-config-seasoned` with your proposal.

## ESLint and Prettier

- This ESLint configuration should work together with prettier, thanks to [eslint-plugin-prettier](prettier.io/docs/en/eslint.html#use-eslint-to-run-prettier)

- For better development experience, use it with [prettier-atom](https://github.com/prettier/prettier-atom) plugin.
