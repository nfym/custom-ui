import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { webUpdateNotice } from '@plugin-web-update-notification/vite'
import { OUTPUT_DIR, DEPLOY_BASE_URL } from './build/constant'
// 指定解析路径
import { resolve } from 'path'
const pathResolve = (dir: string) => resolve(__dirname, dir)

export default defineConfig(({ mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {
    plugins: [
      vue(),
      webUpdateNotice({
        /**
         * support 'git_commit_hash' | 'svn_revision_number' | 'pkg_version' | 'build_timestamp' | 'custom'
         * * if repository type is 'Git', default is 'git_commit_hash'
         * * if repository type is 'SVN', default is 'svn_revision_number'
         * * if repository type is 'unknown', default is 'build_timestamp'
         * */
        versionType: 'build_timestamp',
        /** polling interval（ms）
         * if set to 0, it will not polling
         * @default 10 * 60 * 1000
         */
        // checkInterval: 0,
        logVersion: true,

        // hiddenDefaultNotification: true, // 取消默认的通知栏, 在其他文件中监听自定义更新事件 document.body.addEventListener('plugin_web_update_notice', (e) => {})
        notificationProps: {
          title: '📢 系统更新通知',
          description: '检测到当前版本系统已更新, 请刷新页面后使用。',
          buttonText: '刷新',
          dismissButtonText: '忽略'
        }
      })
    ],
    base: DEPLOY_BASE_URL,
    root: './', // 默认的 process.cwd() 获取到当前工作目录 custom-ui
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
          // drop_console: true, // 生产环境去除 console
          drop_debugger: true // 生产环境去除 debugger
        }
      }
    }
  }
})
