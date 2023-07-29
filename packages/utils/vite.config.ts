import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // outDir: 'dist', // 产物输出目录默认 dist

    lib: {
      // 构建的入口文件
      entry: './index.ts',
      // 当产物为 umd、iife 格式时，该模块暴露的全局变量名称
      name: 'CustomUtil',
      // 产物文件名称
      fileName: 'customui-util'
    },
    // 为了方便学习，查看构建产物，将此置为 false，不要混淆产物代码
    minify: false
  }
})
