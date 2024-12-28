require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'standard',
    'plugin:vue/vue3-recommended',
    'plugin:vue-scoped-css/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'linebreak-style': ['error', 'unix'],
    'no-multiple-empty-lines': 'error',
    'object-curly-spacing': ['error', 'always'],
    'vue-scoped-css/enforce-style-type': ['error', { allows: ['scoped', 'plain'] }],
    'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
      },
    ],
  },
}
