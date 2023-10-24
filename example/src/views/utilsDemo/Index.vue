<template>
  <main :class="prefix.b()">
    <header :class="prefix.be('page-title')">工具方法</header>

    <div :class="prefix.be('page-desc')">常用工具方法整理</div>

    <section>
      <a-row :gutter="[40, 16]">
        <a-col :span="8">
          <div :class="prefix.be('card')">
            <header :class="prefix.be('card-header')">
              <div :class="prefix.be('card-header-title')">IS</div>
              <img
                :class="prefix.be('card-header-icon')"
                :src="getImageUrl('icon/code.svg')"
              />
            </header>

            <main :class="prefix.be('card-body')">
              <UiScrollbar wrap-style="padding: 1rem">
                <a-row :gutter="[0, 8]">
                  <div :class="prefix.be('card-body-item')">数据库模式设计</div>
                  <div :class="prefix.be('card-body-item')">数据导入</div>
                  <div :class="prefix.be('card-body-item')">数据导出</div>
                  <div :class="prefix.be('card-body-item')">数据库模式设计</div>
                  <div :class="prefix.be('card-body-item')">数据导入</div>
                  <div :class="prefix.be('card-body-item')">数据导出</div>
                </a-row>
              </UiScrollbar>
            </main>
          </div>
        </a-col>

        <a-col :span="8">
          <div :class="prefix.be('card')">
            <header
              :class="[
                prefix.be('card-header'),
                prefix.bem('card-header', 'bg-light')
              ]"
            >
              <div :class="prefix.be('card-header-title')">开发</div>
              <img
                :class="prefix.be('card-header-icon')"
                :src="getImageUrl('icon/book.svg')"
              />
            </header>

            <main :class="prefix.be('card-body')">
              <UiScrollbar wrap-style="padding: 1rem">
                <a-row :gutter="[0, 8]">
                  <div :class="prefix.be('card-body-item')">数据库模式设计</div>
                  <div :class="prefix.be('card-body-item')">数据导入</div>
                  <div :class="prefix.be('card-body-item')">数据导出</div>
                  <div :class="prefix.be('card-body-item')">数据库模式设计</div>
                  <div :class="prefix.be('card-body-item')">数据导入</div>
                  <div :class="prefix.be('card-body-item')">数据导出</div>
                </a-row>
              </UiScrollbar>
            </main>
          </div>
        </a-col>

        <a-col :span="8">
          <div :class="prefix.be('card')">
            <header :class="prefix.be('card-header')">
              <div :class="prefix.be('card-header-title')">开发</div>
              <img
                :class="prefix.be('card-header-icon')"
                :src="getImageUrl('icon/edit.svg')"
              />
            </header>

            <main :class="prefix.be('card-body')">
              <UiScrollbar wrap-style="padding: 1rem">
                <a-row :gutter="[0, 8]">
                  <div :class="prefix.be('card-body-item')">数据库模式设计</div>
                  <div :class="prefix.be('card-body-item')">数据导入</div>
                  <div :class="prefix.be('card-body-item')">数据导出</div>
                  <div :class="prefix.be('card-body-item')">数据库模式设计</div>
                  <div :class="prefix.be('card-body-item')">数据导入</div>
                  <div :class="prefix.be('card-body-item')">数据导出</div>
                </a-row>
              </UiScrollbar>
            </main>
          </div>
        </a-col>
      </a-row>
    </section>
  </main>
</template>

<script setup lang="ts">
defineOptions({ name: 'UtilsDemo' })

import { usePrefix } from '@custom-ui/hooks'
import { getImageUrl } from '@/utils/util'
import { UiScrollbar } from '@custom-ui/components'

const prefix = usePrefix('utils-bom')
</script>

<style scoped lang="less">
@prefix-cls: ~'utils-bom';

.@{prefix-cls} {
  &__page-title {
    margin-bottom: 1.5rem;
    color: #142140;
    font-weight: 600;
    font-size: 1.875rem;
    letter-spacing: 0.05rem;
  }

  &__page-desc {
    margin-bottom: 1.5rem;
  }

  &__card {
    border-radius: 0.25rem;
    box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 2px 17px 0 #f3f5fa;
  }

  &__card-header {
    position: relative;
    padding: 1.5rem;
    background: linear-gradient(314deg, #e8f0ff 0%, #cdddff 100%);
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  &__card-header--bg-light {
    background: linear-gradient(270deg, #fff, #e8f4ff 100%);
  }

  &__card-header-title {
    color: #142140;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.75rem;
    letter-spacing: 0.025rem;
  }

  &__card-header-icon {
    position: absolute;
    right: 1.5rem;
    bottom: 0;
    width: 4.25rem;
    max-width: 100%;
    height: auto;
  }

  &__card-body {
    height: 12rem;
  }

  &__card-body-item {
    width: 100%;
    padding: 0.75rem;
    background: #fafafb;
    border-radius: 0.25rem;
  }

  // &__card-footer {
  //   height: 2rem;
  //   padding: 0 1rem;
  //   line-height: 2rem;
  //   background: linear-gradient(270deg, #fff, #e8f4ff 100%);
  //   border-radius: 0 0 4px 4px;
  // }
}
</style>
