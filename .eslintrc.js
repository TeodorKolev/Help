module.exports = {
  parser: 'babel-eslint',

  extends: [
    "standard",
    "standard-react"
  ],

  plugins: [
    "react",
    "promise"],

  globals: {
    __DEV__: true,
  },

  env: {
    browser: true,
  },

  rules: {
    "key-spacing"          : "off",
    "jsx-quotes"           : [2, "prefer-single"],
    "max-len"              : [2, 120, 2],
    "object-curly-spacing" : [2, "always"],
    "comma-dangle"         : "off",
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],

    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  },

  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
