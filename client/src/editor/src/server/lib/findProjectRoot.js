// external deps
const path = require("path");
const findPackageJson = require("find-package-json");

// internal deps
const defaults = require("./defaults");

module.exports = function findProjectRoot() {
  packageJson = findPackageJson(__dirname).next();
  while (
    packageJson.done === false &&
    packageJson.value.name !== defaults.projectName
  ) {
    packageJson = packageJson.next();
    console.log("finding package.json", packageJson.value.name);
  }

  return (packageJson.value || {}).name == defaults.projectName
    ? packageJson
    : null;
};
