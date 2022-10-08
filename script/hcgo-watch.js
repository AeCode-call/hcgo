const consola = require('consola');
const { objtype, runcwd, getEnv, getWpyEnv } = require('../utils/tools');

/**
 * 监听项目运行
 * @param {*} env 从命令行中获取到的-e --env参数 
 * @param {*} dir 从命令行中获取到的-d --dir参数 
 */
module.exports = ({ env = "", dir = '' }) => {
  const { type, dir: objectName } = objtype(dir)

  if (dir === true || !dir) dir = objectName;

  let cwd, str;

  switch (type) {
    case "react":
      str = `npm run start --dir=${dir}`
      runcwd(str, { cwd: objectName && '../../' })
      break;

    case "mix":
      cwd = getEnv(env)
      if (!cwd.app) {
        consola.info("将为你默认指定微信平台");
        cwd = { ...cwd, app: 'weapp' }
      }
      str = `npx cross-env RUN_ENV='dev' npm_config_env='${cwd.env}' npm_config_dir='${dir}' taro build --type ${cwd.app} --watch`
      runcwd(str, { cwd: objectName && '../../' })
      break;

    case "wepy":
      cwd = getWpyEnv(env)
      if (!cwd.app) {
        consola.info("将为你默认指定微信平台");
        cwd = { ...cwd, app: 'weapp' }
      }
      str = `npx cross-env NODE_ENV=develop API_ENV=${cwd.env} wepy build --watch`
      runcwd(str)
      break;

    default:
      consola.error('无法识别项目类型')
      break;
  }
}