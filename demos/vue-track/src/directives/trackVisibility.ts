import type { App, Directive } from 'vue'

interface Attributes extends NamedNodeMap {
  'track-key'?: any
  'track-params'?: any
}

const options = {
  root: null, // 默认浏览器视窗
  threshold: 0.9 // target 元素和 root 元素相交程度达到该值的时候回调函数将会被执行。
}

const timer: { [propName: string]: any } = {} // 元素曝光时长定时器对象
const timeLong = 5000 // 元素默认的曝光时长

const callback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    console.log(
      '🚀 ~ file: trackVisibility.ts:18 ~ entries.forEach ~ entry:',
      entry
    )
    const el = entry.target as HTMLElement
    const { id } = { ...el.dataset } as any
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

      timer[id] = setTimeout(function () {
        // TODO上报埋点信息
        data

        // 上报成功后取消监听
        console.log(id, timer[id], '🚀 ~ 上报成功取消监听')
        removeListener(el)
        visuallyList.push(id)
        timer[id] = null
      }, timeLong)
    } else {
      if (timer[id]) {
        console.log(id, timer[id], '🚀 ~ 停留时间不足5s取消监听')
        clearTimeout(timer[id])
        timer[id] = null
      }
    }
  })
}
const observer = new IntersectionObserver(callback, options)

const visuallyList: string[] = [] // 记录已经上报过的曝光元素 id
const addListenner = (ele: HTMLElement) => {
  if (!ele.dataset.id) {
    window.alert(
      '使用 v-trackVisibility 监听内容曝光必须设置 data-id 作为元素唯一标记，防止元素重复曝光'
    )
  } else if (visuallyList.includes(ele.dataset.id)) {
    console.log(
      '🚀 ~ file: trackVisibility.ts:71 ~ addListenner ~ ele.dataset.id:',
      ele.dataset.id,
      '已曝光'
    )

    return
  }

  observer.observe(ele)
}
const removeListener = (ele: HTMLElement) => {
  observer.unobserve(ele)
}

const trackVisbilityDirective: Directive = {
  mounted(el: HTMLElement) {
    addListenner(el)
  },
  unmounted(el: HTMLElement) {
    removeListener(el)
  }
}

export function setupTrackVisibilityDirective(app: App) {
  app.directive('trackVisibility', trackVisbilityDirective)
}
