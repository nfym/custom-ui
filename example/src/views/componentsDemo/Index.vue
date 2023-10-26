<template>
  <main :class="prefix.b()">
    <header :class="prefix.be('page-title')">组件库</header>

    <div :class="prefix.be('page-desc')">常用组件整理</div>

    <section>
      <a-row :gutter="[40, 16]">
        <a-col :span="6">
          <div :class="prefix.be('card')">
            <div :class="prefix.be('card-img-wrap')">
              <img src="/public/logo.svg" />
            </div>

            <div :class="prefix.be('card-sub')">
              <div :class="prefix.be('card-title')">创意中心</div>
              <div :class="prefix.be('card-desc')">
                全方位的营销创意平台，支持图文、视频再到落地页的素材及智能化创意
              </div>
              <div :class="prefix.be('card-link')">
                <span :class="prefix.be('card-text')">立即查看</span>
                <img
                  :class="prefix.be('card-icon')"
                  :src="getImageUrl('icon/arrow.svg')"
                />
              </div>
            </div>
          </div>
        </a-col>

        <a-col :span="6">
          <div :class="prefix.be('card')">
            <div :class="prefix.be('card-img-wrap')">
              <img
                src="https://img.alicdn.com/tfs/TB1PYI2wxz1gK0jSZSgXXavwpXa-260-260.png"
                alt="创意中心"
              />
            </div>

            <div :class="prefix.be('card-sub')">
              <div :class="prefix.be('card-title')">创意中心</div>
              <div :class="prefix.be('card-desc')">
                全方位的营销创意平台，支持图文、视频再到落地页的素材及智能化创意
              </div>
              <div :class="prefix.be('card-link')">
                <span :class="prefix.be('card-text')">立即查看</span>
                <img
                  :class="prefix.be('card-icon')"
                  :src="getImageUrl('icon/arrow.svg')"
                />
              </div>
            </div>
          </div>
        </a-col>

        <a-col :span="6">
          <div :class="prefix.be('card')">
            <div :class="prefix.be('card-img-wrap')">
              <img
                src="https://img.alicdn.com/tfs/TB1f3TLvHj1gK0jSZFuXXcrHpXa-256-256.png"
                alt="创意中心"
              />
            </div>

            <div :class="prefix.be('card-sub')">
              <div :class="prefix.be('card-title')">创意中心</div>
              <div :class="prefix.be('card-desc')">
                全方位的营销创意平台，支持图文、视频再到落地页的素材及智能化创意
              </div>
              <div :class="prefix.be('card-link')">
                <span :class="prefix.be('card-text')">立即查看</span>
                <img
                  :class="prefix.be('card-icon')"
                  :src="getImageUrl('icon/arrow.svg')"
                />
              </div>
            </div>
          </div>
        </a-col>

        <a-col :span="6">
          <div :class="prefix.be('card')">
            <div :class="prefix.be('card-img-wrap')">
              <img
                src="https://img.alicdn.com/tfs/TB1PYI2wxz1gK0jSZSgXXavwpXa-260-260.png"
                alt="创意中心"
              />
            </div>

            <div :class="prefix.be('card-sub')">
              <div :class="prefix.be('card-title')">创意中心</div>
              <div :class="prefix.be('card-desc')">
                全方位的营销创意平台，支持图文、视频再到落地页的素材及智能化创意
              </div>
              <div :class="prefix.be('card-link')">
                <span :class="prefix.be('card-text')">立即查看</span>
                <img
                  :class="prefix.be('card-icon')"
                  :src="getImageUrl('icon/arrow.svg')"
                />
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </section>
  </main>
</template>

<script setup lang="ts">
defineOptions({ name: 'ComponentsDemo' })

import { usePrefix } from '@custom-ui/hooks'
import { getImageUrl } from '@/utils/util'
const prefix = usePrefix('components-demo')
</script>

<style scoped lang="less">
@prefix-cls: ~'components-demo';

.@{prefix-cls} {
  height: 100%;
  padding: 1rem;
  background-color: #eff8ff;

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
    display: inline-block;
    width: 16.75rem;
    height: 20.25rem;
    padding: 0 1.5rem 1.5rem;
    overflow: hidden;
    background-color: #fff;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.5s;
  }

  &__card:hover {
    box-shadow: 0 10px 20px 0 rgba(53, 58, 115, 0.08);
  }

  &__card-img-wrap {
    padding: 1.5rem 0;
    text-align: center;
    transition: all 0.5s;
  }

  &__card-img-wrap img {
    width: 8rem;
    height: 8rem;
    overflow: clip;
    transition: all 0.5s;
    overflow-clip-margin: content-box;
  }

  &__card:hover &__card-img-wrap img {
    transform: translate(-58px, -15px) scale(0.828);
  }

  &__card-sub {
    transition: all 0.5s;
  }

  &__card:hover &__card-sub {
    transform: translateY(-30px);
  }

  &__card-title {
    margin-bottom: 20px;
    color: #333;
    font-size: 20px;
  }

  &__card-desc {
    display: -webkit-box;
    min-height: 32px;
    overflow: hidden;
    color: #666;
    font-size: 12px;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  &__card-link {
    color: #ff5000;
    font-weight: 600;
    font-size: 12px;
    transform: translateY(50px);
    transition: all 0.6s;
  }

  &__card:hover &__card-link {
    transform: translateY(26px);
  }

  &__card-text {
    margin-right: 5px;
  }

  &__card-icon {
    width: 10px;
    height: 10px;
  }
}
</style>
