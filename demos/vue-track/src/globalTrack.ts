import {
  // write2Storage,
  getBaseInfo,
  // getTemplateInfo,
  // throttle,
  DEDAULT_KEY,
  BASE_KEY
} from './utils'
import { LocalStorage } from './utils/storage'
import router from './router'
import type { App, DirectiveBinding } from 'vue'

type anyMap = Indexable<any>
type Fn<V> = (...arg: unknown[]) => V
// type EventMap = '' | 'click'

// const printLog = (tag: string, value: string) => {
//   console.log(
//     `%c%c${tag}%c${value}`,
//     'line-height:28px;',
//     'padding:2px 4px;background:#3173f6;color:#fff;font-size:12px;border-radius:4px 0 0 4px;',
//     'padding:2px 4px;background:#fff;color:#3173f6;font-size:12px;border-radius:0 4px 4px 0;'
//   )
// }

class TrackPoint {
  intervalTime: number
  uploadTracks: Fn<void>
  baseInfo: TrackInfo
  pageStartTime: number // 页面开始时间
  pv: number // Page View
  vv: number // Visit View

  constructor(options = {} as anyMap) {
    this.intervalTime = options.time || 60 * 1000
    this.uploadTracks = options.uploadTracks
    this.baseInfo = {}
    this.pv = 0
    this.vv = 0
    this.pageStartTime = Date.now()
  }

  /**
   * 埋点轮询上传
   * @param immediate 是否立即上传历史埋点数据
   */
  init(): // mmediate = true
  void {
    this.baseInfo = getBaseInfo()
    LocalStorage.set(BASE_KEY, this.baseInfo)
    this.addViewListener()
    this.vv += 1

    // setInterval会把this指向window
    // const fn = this.sendTrackInfo.bind(this)
    // console.log('🚀 ~ file: globalTrack.ts:70 ~ TrackPoint ~ init ~ fn:', fn)
    // setInterval(fn, this.intervalTime)
    // if (immediate) fn()
  }

  /**
   * 上传本地埋点数据
   * @param uploadKey getPermission返回
   */
  async sendTrackInfo(): Promise<void> {
    const trackList = LocalStorage.get(DEDAULT_KEY) || []
    if (trackList.length === 0) return

    await this.uploadTracks(trackList, this.baseInfo)
  }

  // 记录埋点数据
  recordTrackInfo(el: HTMLElement, binding: DirectiveBinding): any {
    console.log(
      '🚀 ~ file: globalTrack.ts:67 ~ TrackPoint ~ recordTrackInfo ~ el:',
      el.dataset,
      binding
    )
  }

  // 添加页面路由更改监听
  addViewListener() {
    router.beforeEach((to, from) => {
      console.log(
        '🚀 ~ file: globalTrack.ts:84 ~ TrackPoint ~ router.beforeEach ~ from:',
        from
      )
      // 记录页面 stay 停留时间
      if (to) {
        const stayTime = Date.now() - this.pageStartTime
        console.log(
          '🚀 ~ file: globalTrack.ts:84 ~ TrackPoint ~ router.beforeEach ~ stayTime:',
          stayTime
        )
        this.pageStartTime = Date.now()
      }
    })

    router.afterEach(() => {
      //  记录PV
      this.pv += 1

      console.log(
        '🚀 ~ file: globalTrack.ts:84 ~ TrackPoint ~ router.afterEach ~ this.pv:',
        this.pv
      )

      // console.log(
      //   '🚀 ~ file: globalTrack.ts:116 ~ TrackPoint ~ router.afterEach ~ from:',
      //   from
      // )
      // console.log(
      //   '🚀 ~ file: globalTrack.ts:116 ~ TrackPoint ~ router.afterEach ~ to:',
      //   to
      // )
    })
  }

  // // 埋点事件取消绑定
  // handleUnBindEvent(el: HTMLElement, binding: DirectiveBinding<any>): void {

  // }
}

export default {
  install(app: App, options: Indexable<string | boolean>): void {
    console.log('🚀 ~ file: globalTrack.ts:225 ~ install ~ options:', options)

    const trackInstance = new TrackPoint(options)
    trackInstance.init()
    app.provide('trackInstance', trackInstance)

    // // 兼容 vue 3
    // const isVueNext = app.version.split('.')[0] === '3'
    // const bindKey = isVueNext ? 'beforeMount' : 'bind'
    // const unbindKey = isVueNext ? 'beforeUnmount' : 'unbind'
    // app.directive('track', {
    //   [bindKey](el: HTMLElement, binding: DirectiveBinding<any>) {
    //     trackInstance.handleBindEvent(el, binding)
    //   },
    //   [unbindKey](el: HTMLElement, binding: DirectiveBinding<any>) {
    //     trackInstance.handleUnBindEvent(el, binding)
    //   }
    // })
  }
}
