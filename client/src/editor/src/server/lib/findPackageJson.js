// external deps
const path = require("path");
const findPackageJson_ = require("find-package-json");

// internal deps
const defaults = require("./defaults");

module.exports = function findPackageJson() {
  packageJson = findPackageJson_(__dirname).next();
  while (
    packageJson.done === false &&
    packageJson.value.name !== defaults.editor.projectName
  ) {
    packageJson = packageJson.next();
    console.log("finding package.json", packageJson.value.name);
  }

  return (packageJson.value || {}).name == defaults.editor.projectName
    ? packageJson
    : null;
};