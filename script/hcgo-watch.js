const consola = require('consola');
const { objtype, runcwd, getEnv, runnpx } = require('../utils/tools');

/**
 * 监听项目运行
 * @param {*} env 从命令行中获取到的-e --env参数 
 * @param {*} dir 从命令行中获取到的-d --dir参数 
 */
module.exports = ({ env = "", dir = '' }) => {
  const { type, dir: objectName } = objtype(dir)

  if (dir === true || !dir) dir = objectName;

  let cwd = getEnv(env)

  if (!cwd.app) {
    consola.info("将为你默认指定微信平台");
    cwd = {
      ...cwd,
      app: 'weapp'
    }
  }

  switch (type) {
    case "react":
      react(dir, objectName)
      break;

    case "mix":
      mix(cwd, dir, objectName)
      break;

    case "wepy":
      wepy(cwd)
      break;

    default:
      consola.error('无法识别项目类型')
      break;
  }
}
/**
 * 2.0 公众号
 * @param {*} dir 项目名称
 */
const react = (dir, objectName) => {
  const cwd = ['run', 'start', `--dir${dir}`]
  runcwd(cwd, { cwd: objectName && '../../' })
}


/**
 * 融合版
 * @param {*} env 需要运行的环境
 * @param {*} app 需要运行的平台
 * @param {*} dir 项目名称
 */
const mix = ({ env, app }, dir, objectName) => {
  const str = `npx cross-env RUN_ENV='dev' npm_config_env='${env}' npm_config_dir='${dir}' taro build --type ${app} --watch`
  runcwd(str, { cwd: objectName && '../../' })
}

/**
 * 4.0 小程序
 * @param {*} env 需要运行的环境
 * @param {*} app 需要运行的平台，4.0默认只走微信，后续按需添加。
 */
const wepy = ({ env, app = '' }) => {
  const str = `npx cross-env NODE_ENV=develop API_ENV=${env} wepy build --watch`
  runcwd(str)
}