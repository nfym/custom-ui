import { execa } from 'execa'
import inquirer from 'inquirer'

const config = [
  {
    name: 'example',
    packageName: '@example',
    port: 3008,
    command: 'pnpm vite preview example --port '
  },
  {
    name: 'demo 空模板',
    packageName: '@demos/demo',
    port: 4008,
    command: 'pnpm vite preview demos/demo --port '
  },
  {
    name: 'wow + animate.css 动画',
    packageName: '@demos/wow',
    port: 4018,
    command: 'pnpm vite preview demos/wow --port '
  },
  {
    name: 'gsap 动画',
    packageName: '@demos/gsap',
    port: 4028,
    command: 'pnpm vite preview demos/gsap --port '
  }
]

// 运行选择命令
function runInquirerCommand() {
  inquirer
    .prompt([
      {
        name: 'preview', // 存储答案时要使用的名称
        type: 'checkbox',
        message: '请选择要预览的应用，请确保已经build',
        choices: [
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
      answers.preview.map((answer) => {
        execa(answer.command + answer.port, { stdio: 'inherit' })
      })
    })
}

runInquirerCommand()
