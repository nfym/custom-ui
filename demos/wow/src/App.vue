<template>
  <h1 class="text-wobble">wow + Animate.css</h1>

  <a
    class="animate__animated animate__bounce"
    href="https://animate.style/"
    target="_blank"
  >
    https://animate.style/
  </a>

  <p class="animate__animated animate__bounce">
    使用 Animate.css ^4.1.1： animate__animated animate__bounce
  </p>

  <p class="animated bounce">
    使用wow.js 自带的 Animate.css 3.x：animated bounce
  </p>

  <section class="wow animate__fadeInUp">
    Animate.css ^4.x 需要 animate__ 前缀
    <p>wow animate__fadeInUp</p>
  </section>

  <section
    class="wow animate__bounce"
    data-wow-duration="2s"
    style="margin-top: 50px"
  >
    <p>animate__bounce</p>
  </section>
  <section class="wow bounce" style="margin-top: 50px">
    Animate.css ^3.x 不需要 animate__ 前缀
    <p>wow bounce</p>
  </section>

  <section style="margin-top: 50px">
    <h2>动画延迟</h2>
    <div @click="tab = 'tab1'">tab1</div>
    <div @click="tab = 'tab2'">tab2</div>
    <div @click="tab = 'tab3'">tab3</div>
    <ul v-if="tab === 'tab1'">
      <li class="wow animate__fadeInUp" data-wow-delay="0s">
        data-wow-delay="0s"
      </li>
      <li class="wow animate__fadeInUp" data-wow-delay="0.055s">
        data-wow-delay="0.055s"
      </li>
      <li class="wow animate__fadeInUp" data-wow-delay="0.11s">
        data-wow-delay="0.11s"
      </li>
      <li class="wow animate__fadeInUp" data-wow-delay="0.165s">
        data-wow-delay="0.165s"
      </li>
    </ul>
    <ul v-if="tab === 'tab2'">
      <li class="wow animate__fadeInUp" data-wow-delay="0s">
        data-wow-delay="0s"
      </li>
      <li class="wow animate__fadeInUp" data-wow-delay="0.055s">
        data-wow-delay="0.055s"
      </li>
      <li class="wow animate__fadeInUp" data-wow-delay="0.11s">
        data-wow-delay="0.11s"
      </li>
      <li class="wow animate__fadeInUp" data-wow-delay="0.165s">
        data-wow-delay="0.165s"
      </li>
    </ul>
    <ul v-if="tab === 'tab3'">
      <li class="wow animate__bounceInUp" data-wow-delay="0s">
        data-wow-delay="0s"
      </li>
      <li class="wow animate__bounceInUp" data-wow-delay="0.055s">
        data-wow-delay="0.055s"
      </li>
      <li class="wow animate__bounceInUp" data-wow-delay="0.11s">
        data-wow-delay="0.11s"
      </li>
      <li class="wow animate__bounceInUp" data-wow-delay="0.165s">
        data-wow-delay="0.165s"
      </li>
    </ul>
  </section>

  <section style="margin-top: 50px">
    <h2>icon wobble 摇摆动画</h2>
    <!-- SVG Sprites合并  -->
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol id="zhihu" viewBox="0 0 24 24">
        <path
          d="M12.345 17.963l-1.688 1.074-2.132-3.35c-.44 1.402-1.171 2.665-2.138 3.825-.402.483-.82.918-1.301 1.376-.155.146-.775.716-.878.82l-1.414-1.415c.139-.139.787-.735.914-.856.43-.408.796-.79 1.143-1.205C6.117 16.712 6.88 15.02 6.988 13H3v-2h4V7h-.868c-.689 1.266-1.558 2.222-2.618 2.858L2.486 8.143c1.396-.838 2.426-2.603 3.039-5.36l1.952.434c-.14.633-.303 1.228-.489 1.783h4.513v2H9v4h2.5v2H9.186l3.159 4.963zm3.838-.07L17.3 17h1.702V7h-4v10h.736l.446.893zM13.001 5h8v14h-3l-2.5 2-1-2H13V5z"
        />
      </symbol>
      <symbol id="bilibili" viewBox="0 0 24 24">
        <path
          d="M18.223 3.086a1.25 1.25 0 0 1 0 1.768L17.08 5.996h1.17A3.75 3.75 0 0 1 22 9.746v7.5a3.75 3.75 0 0 1-3.75 3.75H5.75A3.75 3.75 0 0 1 2 17.246v-7.5a3.75 3.75 0 0 1 3.75-3.75h1.166L5.775 4.855a1.25 1.25 0 0 1 1.767-1.768l2.652 2.651c.079.08.145.166.198.258h3.213c.053-.092.12-.18.199-.259l2.651-2.651a1.25 1.25 0 0 1 1.768 0zm.027 5.42H5.75a1.25 1.25 0 0 0-1.247 1.157l-.003.093v7.5c0 .66.51 1.2 1.157 1.247l.093.003h12.5a1.25 1.25 0 0 0 1.247-1.156l.003-.094v-7.5c0-.69-.56-1.25-1.25-1.25zm-10 2.5c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 0 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25zm7.5 0c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 0 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25z"
        />
      </symbol>
      <symbol id="qq" viewBox="0 0 24 24">
        <path
          d="M19.914 14.529a32.024 32.024 0 0 0-.676-1.886l-.91-2.246c.002-.026.013-.468.013-.696C18.34 5.86 16.508 2 12 2 7.494 2 5.66 5.86 5.66 9.7c0 .229.011.671.012.697l-.91 2.246a31.99 31.99 0 0 0-.675 1.886c-.86 2.737-.581 3.87-.369 3.895.455.054 1.771-2.06 1.771-2.06 0 1.224.637 2.822 2.016 3.976-.515.157-1.147.399-1.554.695-.365.267-.319.54-.253.65.289.481 4.955.307 6.303.157 1.347.15 6.014.324 6.302-.158.066-.11.112-.382-.253-.649-.407-.296-1.039-.538-1.555-.695 1.379-1.154 2.016-2.752 2.016-3.977 0 0 1.316 2.115 1.771 2.06.212-.025.49-1.157-.37-3.894z"
        />
      </symbol>
      <symbol id="github" viewBox="0 0 24 24">
        <path
          d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.913-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.563 4.938.363.312.676.912.676 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
        />
      </symbol>
      <symbol id="wechat" viewBox="0 0 24 24">
        <path
          d="M18.575 13.711a.91.91 0 0 0 .898-.898c0-.498-.399-.898-.898-.898a.894.894 0 0 0-.898.898c0 .5.4.898.898.898zm-4.425 0a.91.91 0 0 0 .898-.898c0-.498-.4-.898-.898-.898a.894.894 0 0 0-.898.898c0 .5.399.898.898.898zm6.567 5.04a.347.347 0 0 0-.172.37c0 .048 0 .098.025.147.098.417.294 1.081.294 1.106 0 .073.025.122.025.172a.22.22 0 0 1-.221.22c-.05 0-.074-.024-.123-.048l-1.449-.836a.8.8 0 0 0-.344-.098c-.073 0-.147 0-.196.024-.688.197-1.4.295-2.161.295-3.66 0-6.607-2.457-6.607-5.505 0-3.047 2.947-5.505 6.607-5.505 3.659 0 6.606 2.458 6.606 5.505 0 1.647-.884 3.146-2.284 4.154zM16.674 8.099a9.112 9.112 0 0 0-.28-.005c-4.174 0-7.606 2.86-7.606 6.505 0 .554.08 1.09.228 1.6h-.089a9.966 9.966 0 0 1-2.584-.368c-.074-.025-.148-.025-.222-.025a.832.832 0 0 0-.419.123l-1.747 1.005a.35.35 0 0 1-.148.05.273.273 0 0 1-.27-.27c0-.074.024-.123.049-.197.024-.024.246-.834.369-1.324 0-.05.024-.123.024-.172a.556.556 0 0 0-.221-.441C2.059 13.376 1 11.585 1 9.598 1.001 5.944 4.571 3 8.951 3c3.765 0 6.93 2.169 7.723 5.098zm-5.154.418c.573 0 1.026-.477 1.026-1.026 0-.573-.453-1.026-1.026-1.026s-1.026.453-1.026 1.026.453 1.026 1.026 1.026zm-5.26 0c.573 0 1.027-.477 1.027-1.026 0-.573-.454-1.026-1.027-1.026-.572 0-1.026.453-1.026 1.026s.454 1.026 1.026 1.026z"
        />
      </symbol>
    </svg>

    <svg
      class="icon-bounce"
      style="fill: rgba(40, 196, 95, 1)"
      aria-hidden="true"
    >
      <use xlink:href="#wechat" />
    </svg>

    <svg class="use-wobble-y-hover" style="fill: #0066fe" aria-hidden="true">
      <use xlink:href="#zhihu" />
    </svg>

    <svg class="use-wobble-y-hover" style="fill: #ff5ca1" aria-hidden="true">
      <use xlink:href="#bilibili" />
    </svg>

    <svg class="use-wobble-y-hover" style="fill: #1890ff" aria-hidden="true">
      <use xlink:href="#qq" />
    </svg>

    <svg class="use-wobble-y-hover" aria-hidden="true">
      <use xlink:href="#github" />
    </svg>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import WOW from 'wow.js'

const tab = ref('tab1')

onMounted(() => {
  const wow = new WOW({
    boxClass: 'wow', //  default: wow , 有该class的元素将隐藏，当用户滚动时,出现后会执行指定的动画
    animateClass: 'animate__animated', //  默认 animated，使用 Animate.css 4.x 则设置为 animate__animated
    offset: 0, // default
    mobile: true, // default
    live: true, // default
    resetAnimation: true
  })
  wow.init()
})
</script>

<style scoped>
/* stylelint-disable number-max-precision */
/* stylelint-disable keyframe-block-no-duplicate-selectors */
h1 {
  font-size: 5vw;
  font-family: Lobster, sans-serif;
  text-align: center;
}

section {
  min-height: 300px;
  padding: 1rem;
  border: 1px solid #ccc;
}

li {
  height: 60px;
  margin: 0;
  padding: 0;
  line-height: 60px;
  list-style: none;
  border-bottom: 1px solid #ddd;
}

li:last-child {
  border-bottom: none;
}

.text-wobble {
  animation: 3s text-wobble linear;
}

@keyframes text-wobble {
  0% {
    transform: scale(0, 0);
  }

  1% {
    transform: scale(0.086484529651881, 0.179427456557767);
  }

  2% {
    transform: scale(0.292554252432152, 0.545376716848168);
  }

  3% {
    transform: scale(0.545376716848168, 0.894404964543183);
  }

  4% {
    transform: scale(0.788551391390369, 1.120376016086594);
  }

  5% {
    transform: scale(0.985835941661639, 1.205153326404069);
  }

  6% {
    transform: scale(1.120376016086594, 1.184807461549862);
  }

  7% {
    transform: scale(1.191045818185745, 1.113400777234015);
  }

  8% {
    transform: scale(1.207445230574602, 1.037247338712057);
  }

  9% {
    transform: scale(1.184807461549862, 0.983312126349848);
  }

  10% {
    transform: scale(1.139672272493081, 0.959151493096828);
  }

  11% {
    transform: scale(1.086773838727188, 0.959207005548428);
  }

  12% {
    transform: scale(1.037247338712057, 0.972534530793938);
  }

  13% {
    transform: scale(0.998010256157525, 0.98880159678671);
  }

  14% {
    transform: scale(0.972031419546276, 1.001379435012348);
  }

  15% {
    transform: scale(0.959151493096828, 1.00783265522376);
  }

  16% {
    transform: scale(0.957140100254271, 1.008821093113781);
  }

  17% {
    transform: scale(0.96274018852263, 1.006488198218787);
  }

  18% {
    transform: scale(0.972534530793938, 1.003092956925791);
  }

  19% {
    transform: scale(0.983552526255917, 1.000221414749495);
  }

  20% {
    transform: scale(0.993604544681563, 0.998573305048547);
  }

  21% {
    transform: scale(1.001379435012348, 0.998133854506318);
  }

  22% {
    transform: scale(1.006367469874671, 0.998500975623806);
  }

  23% {
    transform: scale(1.00867876840649, 0.999191084459488);
  }

  24% {
    transform: scale(1.008821093113781, 0.999833501948366);
  }

  25% {
    transform: scale(1.007486437375814, 1.000240340703161);
  }

  26% {
    transform: scale(1.005378103626964, 1.000385276149533);
  }

  27% {
    transform: scale(1.003092956925791, 1.000339232175458);
  }

  28% {
    transform: scale(1.001059752569101, 1.000203385122328);
  }

  29% {
    transform: scale(0.999525049489696, 1.000062534362191);
  }

  30% {
    transform: scale(0.998573305048547, 0.999964849826148);
  }

  31% {
    transform: scale(0.998166624576185, 0.999922697095762);
  }

  32% {
    transform: scale(0.998191241770966, 0.999924761163581);
  }

  33% {
    transform: scale(0.998500975623806, 0.999950419122189);
  }

  34% {
    transform: scale(0.998951615476555, 0.999980662109647);
  }

  35% {
    transform: scale(0.99942365059167, 1.000003563281379);
  }

  36% {
    transform: scale(0.999833501948366, 1.000014970213524);
  }

  37% {
    transform: scale(1.000135225951195, 1.000016350718153);
  }

  38% {
    transform: scale(1.00031555507819, 1.000011778605271);
  }

  39% {
    transform: scale(1.000385276149533, 1.000005429970832);
  }

  40% {
    transform: scale(1.00036955135608, 1.000000175788403);
  }

  41% {
    transform: scale(1.000299099745054, 0.999997234930038);
  }

  42% {
    transform: scale(1.000203385122328, 0.999996522266158);
  }

  43% {
    transform: scale(1.000106253265117, 0.999997264764804);
  }

  44% {
    transform: scale(1.000023918238932, 0.999998563845857);
  }

  45% {
    transform: scale(0.999964849826148, 0.999999744931904);
  }

  46% {
    transform: scale(0.999930953553717, 1.000000476269022);
  }

  47% {
    transform: scale(0.999919425875407, 1.000000722388812);
  }

  48% {
    transform: scale(0.999924761163581, 1.000000621989317);
  }

  49% {
    transform: scale(0.999940535092441, 1.000000364142579);
  }

  50% {
    transform: scale(0.99996074901389, 1.000000103935755);
  }

  51% {
    transform: scale(0.999980662109647, 0.999999927251821);
  }

  52% {
    transform: scale(0.999997145282538, 0.999999853998891);
  }

  53% {
    transform: scale(1.000008657088084, 0.999999861387962);
  }

  54% {
    transform: scale(1.000014970213524, 0.999999910625746);
  }

  55% {
    transform: scale(1.000016775086596, 0.999999966780841);
  }

  56% {
    transform: scale(1.000015265384358, 1.000000008427682);
  }

  57% {
    transform: scale(1.000011778605271, 1.000000028536839);
  }

  58% {
    transform: scale(1.000007531821609, 1.000000030270993);
  }

  59% {
    transform: scale(1.000003464072008, 1.000000021355454);
  }

  60% {
    transform: scale(1.000000175788403, 1.000000009501385);
  }

  61% {
    transform: scale(0.999997943086903, 0.99999999989862);
  }

  62% {
    transform: scale(0.999996779924779, 0.999999994661554);
  }

  63% {
    transform: scale(0.999996522266158, 0.999999993527534);
  }

  64% {
    transform: scale(0.999996913355979, 0.999999995014962);
  }

  65% {
    transform: scale(0.999997675912265, 0.999999997456225);
  }

  66% {
    transform: scale(0.999998563845857, 0.999999999625199);
  }

  67% {
    transform: scale(0.999999391872285, 1.000000000937729);
  }

  68% {
    transform: scale(1.000000045503658, 1.000000001352395);
  }

  69% {
    transform: scale(1.000000476269022, 1.000000001139136);
  }

  70% {
    transform: scale(1.000000687807928, 1.00000000065078);
  }

  71% {
    transform: scale(1.000000718100621, 1.000000000170632);
  }

  72% {
    transform: scale(1.000000621989317, 0.999999999851502);
  }

  73% {
    transform: scale(1.000000456728239, 0.999999999724765);
  }

  74% {
    transform: scale(1.00000027190648, 0.999999999744926);
  }

  75% {
    transform: scale(1.000000103935755, 0.999999999839136);
  }

  76% {
    transform: scale(0.999999974491714, 0.999999999943276);
  }

  77% {
    transform: scale(0.999999891858109, 1.000000000018919);
  }

  78% {
    transform: scale(0.999999853998891, 1.000000000054265);
  }

  79% {
    transform: scale(0.999999852290513, 1.000000000055976);
  }

  80% {
    transform: scale(0.999999875091735, 1.000000000038668);
  }

  81% {
    transform: scale(0.999999910625746, 1.000000000016565);
  }

  82% {
    transform: scale(0.999999948934096, 0.999999999999035);
  }

  83% {
    transform: scale(0.999999982891666, 0.999999999989729);
  }

  84% {
    transform: scale(1.000000008427682, 0.999999999987969);
  }

  85% {
    transform: scale(1.000000024178711, 0.999999999990925);
  }

  86% {
    transform: scale(1.000000030817137, 0.999999999995506);
  }

  87% {
    transform: scale(1.000000030270993, 0.999999999999484);
  }

  88% {
    transform: scale(1.000000024997425, 1.000000000001836);
  }

  89% {
    transform: scale(1.000000017409911, 1.000000000002528);
  }

  90% {
    transform: scale(1.000000009501385, 1.000000000002084);
  }

  91% {
    transform: scale(1.000000002659794, 1.000000000001161);
  }

  92% {
    transform: scale(0.999999997642536, 1.000000000000276);
  }

  93% {
    transform: scale(0.999999994661554, 0.9999999999997);
  }

  94% {
    transform: scale(0.999999993528801, 0.999999999999482);
  }

  95% {
    transform: scale(0.999999993818591, 0.999999999999531);
  }

  96% {
    transform: scale(0.999999995014962, 0.999999999999711);
  }

  97% {
    transform: scale(0.999999996625079, 0.999999999999904);
  }

  98% {
    transform: scale(0.999999998251508, 1.000000000000041);
  }

  99% {
    transform: scale(0.999999999625199, 1.000000000000103);
  }

  100% {
    transform: scale(1.000000000606774, 1.000000000000103);
  }

  0% {
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  90% {
    opacity: 0.5;
  }

  100% {
    opacity: 0;
  }
}
</style>
