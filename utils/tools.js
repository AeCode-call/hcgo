const { spawn } = require('cross-spawn');
const fs = require('fs');

/**
 * 执行获取到的项目命令
 * @param {cwd} cwd 需执行的命令
 */
exports.runcwd = (cwd) => {
  console.log(111111);
  // const ls = spawn('npm', ['-v']);
  // ls.stdout.on('data', (data) => {
  //   console.log(`${data}`);
  // });
  // ls.stderr.on('data', (data) => {
  //   console.error(`error: ${data}`);
  // });
  // ls.on('close', (code) => {
  //   console.log(`child process exited with code ${code}`);
  // });
};

/**
 * 判断项目类型
 * @returns
 * - type 项目类型: wep, taro, react
 * - dir 项目名称如: p099
 */
exports.objtype = () => {
  const cwd = process.cwd();
  let mix, wepy, react, type, dir;
  try {
    dir = /p\d{1,5}/gi.exec(cwd)[0];
  } catch (error) {
    console.error('请按照规范修改项目文件名,(如: p099)');
  }

  try {
    mix = fs.readFileSync(`${cwd}/tsconfig.json`, 'utf-8');
    react = fs.readFileSync(`${cwd}/index.ejs`, 'utf-8');
    wepy = fs.readFileSync(`${cwd}/wepy.config.js`, 'utf-8');
  } catch (error) {}

  if (mix) type = 'mix';
  if (react) type = 'react';
  if (wepy) type = 'wepy';

  return { type, dir };
};