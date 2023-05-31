<template>
  <h1>vue 数据埋点 demo</h1>

  <div>vue自定义指令封装点击埋点、内容曝光埋点，打开控制台查看打印信息</div>

  <button
    v-trackClick
    track-key="img"
    :track-params="JSON.stringify({ key: 'value' })"
  >
    点击埋点数据
  </button>

  <ul>
    <li v-for="item in 50" :key="item">撑开{{ item }}</li>
  </ul>

  <div
    v-trackVisibility
    data-id="111"
    track-key="trackVisibility"
    :track-params="JSON.stringify({ trackVisibility: 'value' })"
  >
    内容曝光埋点,默认停留5s触发曝光
  </div>

  <ul>
    <li v-for="item in 10" :key="item">撑开{{ item }}</li>
  </ul>

  <div
    v-trackVisibility
    data-id="222"
    track-key="trackVisibility"
    :track-params="JSON.stringify({ trackVisibility: 'value' })"
  >
    内容曝光埋点,默认停留5s触发曝光
  </div>
</template>
