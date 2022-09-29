#!/usr/bin/env node
const program = require('commander');

program
  .version('0.0.1', '-v,--version', '查看当前cli版本')
  .helpOption('-h,--help', '显示帮助信息')
  .description('本项目适用于海鹚区域项目,可通过一个cli运行所有海鹚区域的项目,微信小程序还将加入一键发布到体验版的功能');

program
  .command('b')
  .option('-e --env [env]', '不填为正式环境,可选【s:开发环境】【u:测试环境】')
  .description('build 打包项目，通过-e指定环境')
  .action(function (cmd, options) {
    console.log('exec "%s" using %s mode', cmd, options.exec_mode);
  });

program
  .command('w')
  .option('-e --env')
  .description('watch 监听项目，通过-e指定环境')
  .action(function (cmd, options) {
    console.log('exec "%s" using %s mode', cmd, options.exec_mode);
  });

program
  .command('p')
  .option('-p --path [path]', '如果该项有值则会生成对应路径的开发二维码(正式环境且不会上传小程序到体验版)')
  .description('publish 发布项目禁止指定环境')
  .action(function (cmd, options) {
    console.log('exec "%s" using %s mode', cmd, options.exec_mode);
  });

program.parse(process.argv);

console.log('  - %s cheese', program.cheese);
