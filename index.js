#!/usr/bin/env node
const program = require('commander');
const watch = require('./script/hcgo-watch')


program
  .version('0.0.1', '-v,--version', '查看当前cli版本')
  .helpOption('-h,--help', '显示帮助信息')
  .description('本项目中env的含义: w微信小程序、a阿里小程序、b百度小程序; 空、u、s代表环境. 详细说明可运行对应命令的帮助信息');

// 规划中……
// 实施条件：需要获取测试环境小程序的代码上传密钥, 并打开白名单限制
program
  .command('b')
  .option('-e --env <env>', '必填【w:正式环境微信】【uw:测试环境微信】【sw:开发环境微信】【a:正式环境阿里】【ua:测试环境阿里】【sa:开发环境阿里】')
  .option('-p --path [path]', '选填, 如果你需要打包对应路径的二维码时可以使用该选项')
  .description('build 打包项目(体积更小,可以把你的二维码发送到企业微信)')
  .action(function (cmd, options) {
    console.log('exec "%s" using %s mode', cmd, options.exec_mode);
  });

// 开发中……
program
  .command('w')
  .option('-e --env [env]', '【w:正式环境微信】【uw:测试环境微信】【sw:开发环境微信】【a:正式环境阿里】【ua:测试环境阿里】【sa:开发环境阿里】')
  .description('watch 监听项目(体积更大, 适用于开发环境调试代码)')
  .action(watch);

// 规划中……
// 实施条件：需要项目经理配合获取小程序的代码上传密钥, 并打开白名单限制
program
  .command('p')
  .option('-p --path [path]', '选填, 如果你需要打包对应路径的二维码时可以使用该选项')
  .option('-g --go','选填, 如果该值存在将会把代码发送到正式环境小程序')
  .description('publish 发布项目禁止指定环境')
  .action(function (cmd, options) {
    console.log('exec "%s" using %s mode', cmd, options.exec_mode);
  });

program.parse(process.argv);