export const config = [
  {
    name: 'example',
    packageName: '@example',
    port: 3000,
    command: 'pnpm vite example'
  },
  {
    name: 'demo 空模板',
    packageName: '@demos/demo',
    port: 4000,
    command: 'pnpm pnpm -C demos/demo dev'
  },
  {
    name: 'wow 动画',
    packageName: '@demos/wow',
    port: 4010,
    command: 'pnpm pnpm -C demos/wow dev'
  }
]
