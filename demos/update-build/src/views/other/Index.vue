<script setup lang="ts"></script>

<template>
  <div>other</div>
  <router-link to="/">home</router-link>
  <button>按钮focus</button>
  <p>浏览器 visibilityChange 切换时</p>

  <div>
    路由切换时 在路由拦截里面判断是不是拉取资源错误。如果错误
    说明有部署更新，直接谈提示
    ，如果拉取正常那说明用户无缝切换到最新了，都不用提示了
    <code>
      async function bootstrap() { const app = createApp(App) app.use(router)
      window.addEventListener( 'error', (event) => { // 过滤js error const
      target = event.target || event.srcElement const isElementTarget = target
      instanceof HTMLScriptElement || target instanceof HTMLLinkElement ||
      target instanceof HTMLImageElement if (!isElementTarget) return false //
      上报资源地址 window.alert('更新了，引入原来资源错误') }, true )
      app.mount('#app') }
    </code>
  </div>

  <div>
    路由切换时,插件手动检测更新 window.pluginWebUpdateNotice_.checkUpdate()
  </div>
</template>
