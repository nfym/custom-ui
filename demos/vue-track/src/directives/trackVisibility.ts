import type { App, Directive, DirectiveBinding } from 'vue'

interface Attributes extends NamedNodeMap {
  'track-key'?: any
  'track-params'?: any
}

const options = {
  root: null, // 默认浏览器视窗
  threshold: 1 // 元素完全出现在浏览器视窗内才执行callback函数。
}

const timer: { [propName: string]: any } = {} // 元素曝光时长定时器对象
const timeLong = 5000 // 元素默认的曝光时长

const callback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    console.log(
      '🚀 ~ file: trackVisibility.ts:20 ~ entries.forEach ~ entry:',
      entry
    )

    const attributes: Attributes = entry.target.attributes
    const trackKey = attributes['track-key']?.value

    if (entry.isIntersecting) {
      const triggerType = 'Visibility'
      let trackParams = attributes['track-params']?.value
      trackParams = trackParams && JSON.parse(trackParams)
      const data = {
        createTime: Date.now(),
        triggerType,
        trackKey,
        trackParams
      }
      console.log(
        '🚀 ~ file: trackVisibility.ts:36 ~ entries.forEach ~ data:',
        data
      )

      timer[trackKey] = setTimeout(function () {
        // TODO上报埋点信息

        // 上报成功后取消监听
        observer.unobserve(entry.target)
        visuallyList.push(trackKey)
        timer[trackKey] = null
        console.log('🚀 ~ 上报成功取消监听')
      }, timeLong)
    } else {
      if (timer[trackKey]) {
        clearTimeout(timer[trackKey])
        timer[trackKey] = null
      }
    }
  })
}
const observer = new IntersectionObserver(callback, options)

const visuallyList: any[] = [] // 记录已经上报过的曝光元素
const addListenner = (ele: Element, binding: DirectiveBinding<any>) => {
  if (visuallyList.includes(binding.value)) return
  observer.observe(ele)
}

const removeListener = (ele: Element) => {
  observer.unobserve(ele)
}

const trackVisbilityDirective: Directive = {
  mounted(el: Element, binding) {
    addListenner(el, binding)
  },
  unmounted(el: Element) {
    removeListener(el)
  }
}

export function setupTrackVisibilityDirective(app: App) {
  app.directive('trackVisibility', trackVisbilityDirective)
}
