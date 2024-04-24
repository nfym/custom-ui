import type { App } from 'vue'

export const withInstall = (comp: any): void => {
  comp.install = (app: App) => {
    // 注册组件
    app.component(comp.name, comp)
  }

  return comp
}
