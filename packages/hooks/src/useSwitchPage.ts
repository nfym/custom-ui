/*
 * @Description: 路由切换方法封装
 * @Date: 2023-09-06 17:49:16
 */
import type { RouteLocationRaw, Router } from 'vue-router'
import { useRouter } from 'vue-router'
import { SwitchPage } from '@custom-ui/constants'

export default function useSwitchPage(router: Router = useRouter()) {
  const { push, replace, back } = router
  const switchType = {
    [SwitchPage.PUSH]: push,
    [SwitchPage.REPLACE]: replace,
    [SwitchPage.BACK]: back
  }
  return function (
    option: RouteLocationRaw | SwitchPage,
    type = SwitchPage.PUSH
  ) {
    switchType[type](option)
  }
}
