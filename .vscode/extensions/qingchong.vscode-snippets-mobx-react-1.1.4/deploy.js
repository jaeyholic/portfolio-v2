const shell = require('shelljs')
const semver = require('semver')
const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')
let config = JSON.parse(fs.readFileSync('package.json', {
  encoding: 'utf-8'
}))
const newVersionType = {
  type: 'list',
  name: 'newVersion',
  message: `请选择提交的版本号，当前版本：${config.version}`,
  choices: [
    {
      name: `v${semver.inc(config.version, 'patch')}: Release Patch Version`,
      value: 'patch',
    },
    {
      name: `v${semver.inc(config.version, 'minor')}: Release Minor Version`,
      value: 'minor',
    },
    {
      name: `v${semver.inc(config.version, 'major')}: Release Major Version`,
      value: 'major',
    },
  ],
}
const comfirmType = {
  type: 'confirm',
  name: 'confirm',
  message: '确定发布当前版本？',
  default: true,
}
const Log = str => {
  console.log(str)
}

const run = async () => {
  const { newVersion } = await inquirer.prompt([newVersionType])
  let version = semver.inc(config.version, newVersion)

  let emojiType = ':rocket:'
  let commitMessage = `publish ${config.name}: v${version}`
  Log(`您即将发布:    ${chalk.bgRed(commitMessage)}`)
  const { confirm } = await inquirer.prompt([comfirmType])
  if (confirm) {
    shell.exec('git checkout master')
    shell.exec('git pull origin master')
    shell.exec(`npm version ${version} --no-git-tag-version`)
    shell.exec('git add . -A')
    shell.exec(`git commit -m "${emojiType}   ${commitMessage}"`)
    shell.exec(`git tag -a v${version} -m "build: ${version}"`)
    shell.exec(`git push origin v${version}`)
    shell.exec(`git push origin master`)
    shell.exec(`vsce publish`)
  } else {
    console.log('bye bye ~~')
  }
}
run()
