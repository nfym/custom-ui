import { execa } from 'execa'
import inquirer from 'inquirer'

const config = [
  {
    name: 'example',
    packageName: '@example',
    command: 'pnpm -C example build'
  },
  // lint-stage 测试
  // {
  //   name: 'demos all',
  //   packageName: '@demos/**',
  //   command: 'pnpm -F "./demos/**" build'
  // },
  {
    name: 'demo 空模板',
    packageName: '@demos/demo',
    command: 'pnpm -C demos/demo build'
  },
  {
    name: 'wow + animate.css 动画',
    packageName: '@demos/wow',
    command: 'pnpm -C demos/wow build'
  },
  {
    name: 'gsap 动画',
    packageName: '@demos/gsap',
    command: 'pnpm -C demos/gsap build'
  },
  {
    name: 'utils',
    packageName: '@packages/utils',
    command: 'pnpm -C packages/utils build'
  }
]

// 运行选择命令
function runInquirerCommand() {
  inquirer
    .prompt([
      {
        name: 'build', // 存储答案时要使用的名称
        type: 'checkbox',
        message: '请选择要启动的应用',
        choices: [
          ...config.map((item) => {
            const { name, packageName } = item
            return {
              name: `${name} (${packageName} )`,
              value: item
            }
          })
        ]
      }
    ])
    .then(async (answers) => {
      answers.build.map((answer) => {
        execa(answer.command, { stdio: 'inherit' })
      })
    })
}

runInquirerCommand()