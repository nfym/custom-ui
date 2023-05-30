import type { App, Directive } from 'vue'
const regExpSpace = /(^\s+)|(\s+$)/g

const trimDirective: Directive = {
  created(el: Element) {
    function getInputTarget(elNode: Element): Element | undefined {
      if (elNode.nodeName === 'INPUT') return elNode
      return Array.from(elNode.children).find((item) => getInputTarget(item))
    }
    const input = getInputTarget(el)

    if (!input) return

    const updateInputValue = (e: Event) => {
      ;(e.target as HTMLInputElement).value = (
        e.target as HTMLInputElement
      ).value.replace(regExpSpace, '')
      input.dispatchEvent(new Event('input'))
    }

    input.addEventListener(
      'keydown',
      (e: any) => {
        if ((e as KeyboardEvent).key !== 'Enter') return
        updateInputValue(e)
      },
      true
    )
    input.addEventListener('blur', updateInputValue, true)
  }
}

export function setupTrimDirective(app: App) {
  app.directive('trim', trimDirective)
}

export default trimDirective
