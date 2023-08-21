import { execa } from 'execa'
import inquirer from 'inquirer'

const config = [
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
    command: 'pnpm -C demos/demo dev'
  },
  {
    name: 'wow + animate.css 动画',
    packageName: '@demos/wow',
    port: 4010,
    command: 'pnpm -C demos/wow dev'
  },
  {
    name: 'gsap 动画',
    packageName: '@demos/gsap',
    port: 4020,
    command: 'pnpm -C demos/gsap dev'
  },
  {
    name: 'update-build',
    packageName: '@demos/gsap',
    port: 4030,
    command: 'pnpm -C demos/update-build dev'
  }
]

// 运行选择命令
function runInquirerCommand() {
  inquirer
    .prompt([
      {
        name: 'dev', // 存储答案时要使用的名称
        type: 'checkbox',
        message: '请选择要启动的应用',
        choices: [
          // { name: '运行全部' },
          ...config.map((item) => {
            const { name, packageName, port } = item
            return {
              name: `${name} (${packageName} : ${port})`,
              value: item
              // disabled: occupiedList.find((item) => item.package === key)
              //   .isOccupied
              //   ? '已启动'
              //   : false
            }
          })
        ]
      }
    ])
    .then(async (answers) => {
      answers.dev.map((answer) => {
        execa(answer.command, { stdio: 'inherit' })
      })
    })
}

runInquirerCommand()
