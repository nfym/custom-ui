import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { OUTPUT_DIR, BASE_NAME } from './build/constant'
// 指定解析路径
import { resolve } from 'path'
const pathResolve = (dir: string) => resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {
    plugins: [vue()],
    base: BASE_NAME,
    resolve: {
      // 路径别名
      alias: [
        { find: '@', replacement: pathResolve('src') },
        { find: '#', replacement: pathResolve('src/types') },
        { find: 'api', replacement: pathResolve('src/api') },
        { find: 'components', replacement: pathResolve('src/components') },
        { find: 'utils', replacement: pathResolve('src/utils') }
      ]
    },
    server: {
      host: true,
      port: +env.VITE_PORT || 5173, // 设置服务启动端口号，如果端口已经被使用，Vite 会自动尝试下一个可用的端口
      open: true, // boolean | string 设置服务启动时是否自动打开浏览器，当此值为字符串时，会被用作 URL 的路径名
      cors: true, // 为开发服务器配置 CORS，配置为允许跨域
      https: false,
      // 设置代理，根据项目实际情况配置
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL, // 后台服务地址
          changeOrigin: true, // 是否允许不同源
          secure: false, // 支持https
          prependPath: false,
          rewrite: (path) => {
            console.log(path)
            return path.replace(/^\/api/, '')
          }
        }
      }
    },
    // 生产环境打包配置
    build: {
      outDir: OUTPUT_DIR,
      minify: 'terser',
      terserOptions: {
        compress: {
          keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
          drop_console: true, // 生产环境去除 console
          drop_debugger: true // 生产环境去除 debugger
        }
      }
    }
  }
})
