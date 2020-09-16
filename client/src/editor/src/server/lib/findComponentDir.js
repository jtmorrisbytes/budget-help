const defaults = require("./defaults");
const fs = require("fs");
const path = require("path");
module.exports = function findComponentDir(projectRootDir) {
  let componentDir = path.join(
    projectRootDir,
    defaults.editor.projectSrcDir,
    defaults.editor.componentDir
  );
  return fs.existsSync(componentDir) ? componentDir : null;
};
