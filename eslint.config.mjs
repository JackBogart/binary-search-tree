import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  eslintConfigPrettier,
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'no-constructor-return': 'error',
      'no-duplicate-imports': 'error',
      'no-use-before-define': 'error',
      'no-useless-assignment': 'error',
      'arrow-body-style': [
        'error',
        'as-needed',
        { requireReturnForObjectLiteral: true },
      ],
      'block-scoped-var': 'error',
      'default-case': 'error',
      'default-case-last': 'error',
      'default-param-last': ['error'],
      'eqeqeq': 'error',
      'no-alert': 'error',
      'no-array-constructor': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-continue': 'error',
      'no-else-return': 'error',
      'no-empty-function': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-implicit-coercion': 'error',
      'no-inline-comments': 'error',
      'no-invalid-this': 'error',
      'no-iterator': 'error',
      'no-labels': ['error', { allowLoop: true }],
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-nested-ternary': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-object-constructor': 'error',
      'no-octal-escape': 'error',
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'no-proto': 'error',
      'no-return-assign': 'error',
      'no-script-url': 'error',
      'no-sequences': ['error', { allowInParentheses: false }],
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-underscore-dangle': 'error',
      'no-unneeded-ternary': 'error',
      'no-useless-call': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'no-void': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'operator-assignment': ['error', 'always'],
      'prefer-exponentiation-operator': 'error',
      'prefer-numeric-literals': 'error',
      'prefer-object-has-own': 'error',
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-rest-params': 'error',
      'prefer-template': 'error',
      'radix': 'error',
      'sort-imports': 'error',
      'yoda': ['error', 'never', { exceptRange: true }],
    },
  },
  {
    ignores: [
      'webpack.common.js',
      'webpack.dev.js',
      'webpack.prod.js',
      'dist/',
    ],
  },
];