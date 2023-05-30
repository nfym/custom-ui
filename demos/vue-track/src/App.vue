<template>
  <h1>vue 数据埋点 demo</h1>

  <div>打开控制台查看</div>

  <button
    v-trackClick
    track-key="img"
    :track-params="JSON.stringify({ key: 'value' })"
  >
    点击埋点数据
  </button>

  <ul>
    <li v-for="item in 100" :key="item">撑开{{ item }}</li>
  </ul>

  <div
    v-trackVisibility
    track-key="trackVisibility"
    :track-params="JSON.stringify({ trackVisibility: 'value' })"
  >
    内容曝光埋点,默认停留5s触发曝光
  </div>
</template>
