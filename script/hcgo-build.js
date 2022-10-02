const fs = require('fs')
const path = require('path')

module.exports = () => {
  const key = fs.readFileSync(path.join(__dirname, '../codekey/p.xxxx.key'), 'utf-8')
  console.log("key:", key);
}