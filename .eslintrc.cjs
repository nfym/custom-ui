module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true, // 添加所有 ECMAScript 2021 全局变量并自动将 ecmaVersion 解析器选项设置为 12
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier'
  ],
  rules: {
    // eslint 检查 .vue 文件是否为驼峰命名
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['Index']
      }
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // ↓是否允许使用any类型
    '@typescript-eslint/no-explicit-any': 'off',
    // ↓是否允许!后缀运算符进行非null断言
    '@typescript-eslint/no-non-null-assertion': 'off',
    // ↓是否允许使用@ts-注解
    '@typescript-eslint/ban-ts-comment': 'off'
  }
}
