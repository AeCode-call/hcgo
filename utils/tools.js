const fs = require('fs');
const path = require('path');
const consola = require('consola')
const { spawn } = require('cross-spawn');
const config = require('./config');


/**
 * 执行获取到的项目命令
 * @param {string} cwd 需执行的命令,例：npm run dev
 * @param {object} option 融合版和2.0需要设置{cwd: "../../"}
 */
exports.runcwd = (cwd, option = {}) => {
  const start = cwd.split(" ")
  const gocwd = start.slice(1)
  console.log("statr", start, "gocwd", gocwd);
  const ls = spawn(start[0], gocwd, option);
  ls.stdout.on('data', (data) => {
    console.log(`${data}`);
  });
  ls.stderr.on('data', (data) => {
    console.error(`${data}`);
  });
  ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

/**
 * 执行获取到的项目命令
 * @param {string} cwd 需执行的命令
 * @param {object} option 融合版和2.0需要设置{cwd: "../../"}
 */
exports.runnpx = (cwd, option = {}) => {
  const ls = spawn('npx', cwd, option);
  ls.stdout.on('data', (data) => {
    console.log(`${data}`);
  });
  ls.stderr.on('data', (data) => {
    console.log(`${data}`);
  });
  ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

/**
 * 判断项目类型
 * @returns
 * - type 项目类型: wep, taro, react
 * - dir 项目名称如: p099
 */
exports.objtype = (isDir) => {
  const cwd = process.cwd();
  let mix, wepy, react, dir;

  if (isDir === true || !isDir) {
    try {
      dir = /p\d{1,5}/gi.exec(cwd)[0];
    } catch (error) {
      consola.error('未找到或指定可用项目')
    }
  } else {
    dir = isDir
  }

  try {
    mix = fs.readFileSync(path.join(cwd, './tsconfig.json'), 'utf-8') && 'mix';
    consola.success("正在启动融合版项目");
  } catch (error) { }

  try {
    react = fs.readFileSync(path.join(cwd, './index.ejs'), 'utf-8') && 'react';
    consola.success("正在启动2.0项目");
  } catch (error) { }

  try {
    wepy = fs.readFileSync(path.join(cwd, './wepy.config.js'), 'utf-8') && 'wepy';
    consola.success("正在启动4.0项目");
  } catch (error) { }

  const type = mix || wepy || react;

  return { type, dir };
};

/**
 * 把命令行的输入解析成需要执行的命令的输出可颠倒
 * @param {string} param 命令行的输入
 * @returns env需要运行的环境，app需要运行的平台
 */
exports.getEnv = (param) => {
  const env = config.env[param[0]] || config.env[param[1]]
  const app = config.app[param[0]] || config.app[param[1]]
  return { env, app }
}

/**
 * 把命令行的输入解析成需要执行的命令的输出可颠倒
 * @param {string} param 命令行的输入
 * @returns env需要运行的环境，app需要运行的平台
 */
exports.getWpyEnv = (param) => {
  const env = config.wpyenv[param[0]] || config.wpyenv[param[1]]
  const app = config.app[param[0]] || config.app[param[1]]
  return { env, app }
}