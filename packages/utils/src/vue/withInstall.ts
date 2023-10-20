import type { App } from 'vue'

const withInstall = (comp: any) => {
  comp.install = (app: App) => {
    // 注册组件
    app.component(comp.name, comp)
  }

  return comp
}

export default withInstall
