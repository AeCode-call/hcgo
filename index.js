#!/usr/bin/env node
const program = require('commander');
const watch = require('./script/hcgo-watch')
const build = require('./script/hcgo-build')
const consola = require('consola')



program
  .version('0.0.1', '-v,--version', '查看当前cli版本')
  .helpOption('-h,--help', '显示帮助信息')
  .description('本项目中env的含义: w微信小程序、a阿里小程序、b百度小程序; 空、u、s代表环境. 详细说明可运行对应命令的帮助信息');

// 规划中……
// 实施条件：需要获取测试环境小程序的代码上传密钥, 并打开白名单限制
program
  .command('b')
  .option('-e --env <env>', '【必填】示例：-euw --env=wu,u和w可以互换位置,这都将运行微信小程序测试环境')
  .option('-p --path [path]', '【选填】如果你需要打包对应路径的二维码时可以使用该选项')
  .option('-d --dir [dir]', '【选填】指定项目名称，脚手架目录中运行hcgo时可以通过该选项指定项目名')
  .description('build 打包项目(体积更小,可以把你的二维码发送到企业微信)')
  .action(build);

// 开发中……
program
  .command('w')
  .option('-e --env <env>', '【必填】示例：-euw --env=wu,u和w可以互换位置,这都将运行微信小程序测试环境')
  .option('-d --dir [dir]', '【选填】指定项目名称，脚手架目录中运行hcgo时可以通过该选项指定项目名')
  .description('watch 监听项目(体积更大, 适用于开发环境调试代码)')
  .action(watch);

// 规划中……
// 实施条件：需要项目经理配合获取小程序的代码上传密钥, 并打开白名单限制
program
  .command('p')
  .option('-p --path [path]', '选填, 如果你需要打包对应路径的二维码时可以使用该选项', 'publish')
  .description('publish 发布项目禁止指定环境')
  .action(function (cmd, options) {
    console.error('exec "%s" using %s mode', cmd, options.exec_mode);
    if (cmd.path === true) {
      // 发主页二维码
      return;
    }

    if (cmd.path === 'publish') {
      // 发体验版小程序
      return;
    }
    // 发对应路径小程序二维码

  });

program.parse(process.argv);