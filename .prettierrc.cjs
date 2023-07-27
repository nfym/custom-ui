module.exports = {
  printWidth: 80, // 一行最多 xx 个字符
  tabWidth: 2, // 使用 2 个空格缩进
  useTabs: false, // 缩进不使用tab，使用空格
  semi: false, // 末尾不加分号 『;』
  singleQuote: true, // 默认单引号
  quoteProps: 'as-needed', // 仅在必要时在对象属性key 添加引号
  jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
  trailingComma: 'none', // 对象属性最后加逗号。 none 不加
  bracketSpacing: true, // 在对象{}括号内的首尾需要空格 与文字之间加空格
  jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  arrowParens: 'always', // 箭头函数参数只有一个时是否要有括号
  htmlWhitespaceSensitivity: 'ignore', // HTML空白灵敏度,空格被认为是不敏感的
  // htmlWhitespaceSensitivity: 'css', // 根据显示样式决定 html 要不要折行
  vueIndentScriptAndStyle: false, // vue 文件中的 script、style标签不缩进
  endOfLine: 'lf' // 换行符使用 lf
  // 覆写默认配置,为某些特定文件制定特定配置
  // overrides: [
  //   {
  //     files: '*.json',
  //     options: {
  //       parser: 'json'
  //     }
  //   }
  // ]
}
