const { objtype, runcwd } = require('../utils/tools')

/**
 * 监听项目运行
 * @param {*} action 
 */
module.exports = ({ env = "" }) => {
  // console.log('参数：', cmd);
  const { type, dir } = objtype()
  console.log("obj", type, dir);
  runcwd()
}