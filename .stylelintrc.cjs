module.exports = {
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html/html',
    'stylelint-config-html/vue',
    // 'stylelint-config-prettier',
    'stylelint-config-rational-order'
  ],
  customSyntax: 'postcss-less',
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
  rules: {
    'function-no-unknown': null,
    'selector-class-pattern': null,
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
    'value-keyword-case': [
      'lower',
      {
        ignoreFunctions: ['v-bind', 'var']
      }
    ]
  },
  overrides: [
    {
      files: ['*.vue', '**/*.vue', '*.html', '**/*.html'],
      customSyntax: 'postcss-html',
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep']
          }
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['v-deep', 'v-bind']
          }
        ]
      }
    },
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less'
    }
  ]
}
