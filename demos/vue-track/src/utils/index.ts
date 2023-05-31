import { LocalStorage } from './storage'
import { getOS, getOSVersion, getBrowserInfo } from './browser'

const DEDAULT_KEY = 'vue_track_key'
const BASE_KEY = 'track_base_info' // 上传的基本数据

// 生成唯一id
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}

// 返回埋点基础信息
function getBaseInfo(): TrackInfo {
  const { width, height } = window.screen
  const baseInfo = LocalStorage.get(BASE_KEY) || {}
  const defaultInfo = {
    deviceId: generateUUID(),
    deviceBrand: getBrowserInfo(),
    deviceModel: navigator.userAgent,
    osName: getOS(),
    osVersion: getOSVersion(),
    screenWidth: width,
    screenHeight: height
  }
  return Object.assign({}, defaultInfo, baseInfo)
}

// 返回埋点信息模板
function getTemplateInfo(): TrackInfo {
  return {
    eventId: '',
    eventTime: Date.now(),
    eventResource: '',
    eventModule: '',
    action: ''
  }
}

/**
 * 清除埋点信息
 * @param liftTime 当设置了埋点有效期时自动清除过期埋点
 */
function clearStorage(defaultKey: string, liftTime?: number): void {
  if (liftTime) {
    const trackPoints = LocalStorage.get(defaultKey)
    const newTrackPoints = trackPoints.filter(
      (item: Indexable<number>) => item.eventTime > liftTime
    )
    LocalStorage.set(defaultKey, newTrackPoints)
  } else {
    LocalStorage.remove(defaultKey)
  }
}

// 保存埋点信息到本地
function write2Storage(defaultKey: string, trackInfo: TrackInfo): void {
  const trackPoints = LocalStorage.get(defaultKey) || []
  trackPoints.push({ ...trackInfo })
  LocalStorage.set(defaultKey, trackPoints)
}

/**
 * 特殊情况手动埋点
 * @param trackInfo 回调函数
 * @param trackKey 时间间隔延迟多少毫秒
 */
function manualBurying(trackInfo: TrackInfo, trackKey?: string): void {
  const defaultKey = trackKey || LocalStorage.get(DEDAULT_KEY)
  const info = Object.assign({}, getTemplateInfo(), trackInfo)
  write2Storage(defaultKey, info)
}

/**
 * 节流
 * @param fn 回调函数
 * @param delay 时间间隔延迟多少毫秒
 */
function throttle<C, T extends unknown[]>(
  fn: (this: C, ...args: T) => void,
  delay = 200,
  immediate = false
): (this: C, ...args: T) => void {
  let timer: Nullable<TimeoutId> = null,
    remaining = 0,
    previous = Date.now()
  return function (...args: T) {
    const now = Date.now()
    remaining = now - previous
    if (remaining >= delay || immediate) {
      if (timer) clearTimeout(timer)
      fn.call(this, ...args)
      previous = now
      immediate = false
    } else {
      if (timer) return
      timer = setTimeout(() => {
        fn.call(this, ...args)
        previous = Date.now()
      }, delay - remaining)
    }
  }
}

export {
  write2Storage,
  clearStorage,
  getBaseInfo,
  getTemplateInfo,
  manualBurying,
  throttle,
  DEDAULT_KEY,
  BASE_KEY
}
