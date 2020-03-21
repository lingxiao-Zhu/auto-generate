const fs = require("fs");

/**
 * 生成目录模版
 * @param {*} from 模版目录路径
 * @param {*} to 目标目录路径
 */
function copy(from, to) {
  const paths = fs.readdirSync(from);
  paths.forEach(function(fileName) {
    const f = from + "/" + fileName;
    const t = to + "/" + fileName;
    const st = fs.statSync(f);
    if (st.isFile()) {
      fs.writeFileSync(t, fs.readFileSync(f));
    } else if (st.isDirectory()) {
      fs.mkdirSync(t);
      copy(f, t);
    }
  });
}

exports = module.exports = copy;
