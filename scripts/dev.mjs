import { execa } from 'execa'
import inquirer from 'inquirer'
import config from '../config'

async function devAll() {
  config.map((item) => {
    execa(item.command, { stdio: 'inherit' })
  })
}

// 运行选择命令
function runInquirerCommand() {
  inquirer
    .prompt([
      {
        name: 'dev', // 存储答案时要使用的名称
        type: 'checkbox',
        message: '请选择要启动的应用',
        choices: [
          { name: '运行全部' },
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
      let choiceAll = false // 是否选择全部

      answers.dev.map((answer) => {
        if (answer === '运行全部') {
          choiceAll = true
          devAll()
        } else {
          !choiceAll && execa(answer.command, { stdio: 'inherit' })
        }
      })
    })
}

runInquirerCommand()
