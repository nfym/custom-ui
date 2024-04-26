/*
 * @Description: classname 的 BEM 命名
 * @Date: 2023-09-21 14:15:27
 * @LastEditTime: 2023-09-21 15:35:12
 */
import { computed, unref } from 'vue'
// class 命名前缀 ，例如 element 使用 el, ant desing 使用 ant
export const classPrefix = ''
// 动作前缀，用于添加动作状态，例如：is-success is-required
const statePrefix = 'is-'

// BEM 命名字符拼接函数
const _bem = (
  namespace: string,
  block: string,
  element: string,
  modifier: string
) => {
  // 默认是 Block
  let cls = namespace ? `${namespace}-${block}` : block

  // 如果存在元素
  if (element) {
    cls += `__${element}`
  }
  // 如果存在修饰
  if (modifier) {
    cls += `--${modifier}`
  }

  return cls
}

const usePrefix = (block: string) => {
  // 命名前缀也就是命名空间
  const namespace = computed(() => classPrefix)

  // 创建块 例如：el-form
  const b = () => _bem(unref(namespace), block, '', '')

  // 创建元素 be 例如：el-input__inner
  const be = (element: string) =>
    element ? _bem(unref(namespace), block, element, '') : ''

  // 创建修饰 bm 例如：el-form--default
  const bm = (modifier: string) => _bem(unref(namespace), block, '', modifier)

  // 创建块元素修改器 例如：el-form-item__content--xxx
  const bem = (element: string, modifier: string) =>
    _bem(unref(namespace), block, element, modifier)

  // 动作状态 例如：is-success is-required
  const is = (name: string) => {
    return name ? `${statePrefix}${name}` : ''
  }

  return {
    namespace,
    b,
    be,
    bm,
    bem,
    is
  }
}

export default usePrefix

export type UsePrefixReturn = ReturnType<typeof usePrefix>
