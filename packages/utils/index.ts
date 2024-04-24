// is 数据类型相关
export * from './src/is' // 独立导出所有方法
export * as Is from './src/is' // 将导出方法汇总在 Is 模块对象上

// String
export { base64 } from './src/string/base64'

// format 数据结构相关

// highFn
export * from './src/highFn'
export * as HighFn from './src/highFn'

// Math
export * from './src/math'
export * as Math from './src/math'

// BOM 浏览器相关
export { getSelection } from './src/bom/getSelection'

export * from './src/bom/log'
export * as Log from './src/bom/log'

// Vue
export { withInstall } from './src/vue/withInstall'
