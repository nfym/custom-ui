export function test() {
  console.log('test import')
}

// is 数据类型相关
export * from './src/is'
export * as Is from './src/is'

// String
export { default as base64 } from './src/string/base64'

// format 数据结构相关

// highFn
export { default as sleep } from './src/highFn/sleep'

// Math
export * from './src/math'

// BOM
export { default as getRuntimeEnv } from './src/bom/getRuntimeEnv'
export { default as getSelection } from './src/bom/getSelection'
