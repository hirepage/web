module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'object-curly-spacing': ['warn', 'always'],
    'comma-dangle': ['warn', 'never'],
    'quotes': ['warn', 'single'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/component-name-in-template-casing': ['warn', 'kebab-case'],
    'vue/html-closing-bracket-newline': ['warn', { 'multiline': 'never' }],
    'vue/html-closing-bracket-spacing': ['warn', { 'selfClosingTag': 'never' }],
    'vue/script-indent': ['off', 2, {
      'baseIndent': 1,
      'switchCase': 1
    }],
    'vue/max-attributes-per-line': ['warn', {
      'singleline': 3,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }]
  }
}
