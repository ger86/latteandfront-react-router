module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    },
    babelOptions: {
      presets: ['@babel/preset-react']
    }
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  extends: ['eslint:recommended', 'prettier'],
  root: true,
  rules: {
    semi: [2, 'always', {omitLastInOneLineBlock: true}],
    'space-before-function-paren': ['error', 'never'],
    'no-unused-vars': 2,
    'react/no-did-update-set-state': ['off'],
    'react/jsx-uses-vars': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-key': 'error',
    'react/prop-types': 'error',
    'no-use-before-define': ['error', {functions: false}],
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': ['warn'],
    'comma-dangle': ['warn', 'never'],
    eqeqeq: [2, 'always']
  }
};
