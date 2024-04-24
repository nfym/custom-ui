/**
 * 获取选中的文本
 */
export function getSelection(): string {
  const select = window.getSelection() || ''
  return select.toString()
}
