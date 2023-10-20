type Color = 'primary' | 'success' | 'info' | 'warning' | 'error'

const COLORS: Color[] = ['primary', 'success', 'info', 'warning', 'error']

const COLOR_MAP: Record<Color, string> = {
  primary: '#1677ff',
  success: ' #52C41A',
  info: '#909399',
  warning: '#FA8C16',
  error: '#FF4D4F'
}

const getColor = (type: Color) => COLOR_MAP[type]

const createLog = <T extends any[]>(
  fn: (type: Color, ...args: T) => void
): Record<Color, (...args: T) => void> => {
  return COLORS.reduce((logs, type) => {
    logs[type] = (...args: T) => fn(type, ...args)
    return logs
  }, {} as Record<Color, (...args: T) => void>)
}

const capsuleLogStyle = (
  type: Color,
  ns: string,
  msg: string,
  ...args: any[]
) => {
  const color = getColor(type)
  console.log(
    `%c%c ${ns} %c ${msg} %c ${args.length ? '%o' : ''}`,
    'line-height:28px;',
    `border:1px solid ${color}; background:${color}; padding: 2px; font-size: 12px; border-radius: 4px 0 0 4px; color: #fff;`,
    `border:1px solid ${color}; padding: 2px; font-size: 12px; border-radius: 0 4px 4px 0; color: ${color};`,
    'background:transparent',
    ...args
  )
}
/**
 * logTag : log 胶囊样式
 */
export const logN = createLog(capsuleLogStyle)

const tagLogStyle = (type: Color, msg: string, ...args: any[]) => {
  const color = getColor(type)
  console.log(
    `%c ${msg} ${args.length ? '%o' : ''}`,
    `background:${color}; padding: 2px; border-radius: 4px; color: #fff;`,
    ...args
  )
}
/**
 * logTag : log 标签样式
 */
export const logT = createLog(tagLogStyle)

const colorLogStyle = (type: Color, msg: string, ...args: any[]) => {
  const color = getColor(type)
  console.log(
    `%c ${msg} ${args.length ? '%o' : ''}`,
    `color: ${color};`,
    ...args
  )
}
/**
 * logColor : log 文本添加颜色
 */
export const logC = createLog(colorLogStyle)
