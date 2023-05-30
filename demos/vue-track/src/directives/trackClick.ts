import type { App, Directive } from 'vue'

interface Attributes extends NamedNodeMap {
  'track-key'?: any
  'track-params'?: any
}

interface TrackBaseData {
  eventTime: number // 埋点时间
  triggerType: 'Click' | 'Visibility' // 事件类型
  currentUrl?: string
  fromUrl?: string
}

// interface TrackData {

// }

function getTrackDataFromElement(el: Element) {
  const attributes: Attributes = el.attributes
}

const trackClickDirective: Directive = {
  mounted(el: Element) {
    el.addEventListener(
      'click',
      () => {
        const triggerType = 'Click'
        const attributes: Attributes = el.attributes
        const trackKey = attributes['track-key']?.value
        let trackParams = attributes['track-params']?.value
        trackParams = trackParams && JSON.parse(trackParams)
        const data = {
          createTime: Date.now(),
          triggerType,
          trackKey,
          trackParams
        }
        console.log('🚀 ~ file: trackClick.ts:23 ~ mounted ~ data:', data)
      },
      true
    )
  }
}

export function setupTrackClickDirective(app: App) {
  app.directive('trackClick', trackClickDirective)
}
