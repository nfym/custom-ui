/*
 * @Description: 全局注册 antd 组件
 * @Date: 2023-09-07 17:36:41
 * @LastEditTime: 2023-09-11 18:20:12
 */
import type { App } from 'vue'
import { Button, Menu, Dropdown, Space, Row, Form, Input } from 'ant-design-vue'

export default function setupAntComponent(app: App) {
  app.use(Button)
  app.use(Form)
  app.use(Input)
  app.use(Menu)
  app.use(Dropdown)
  app.use(Space)
  app.use(Row)
}
