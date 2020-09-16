const express = require("express");
const path = require("path");

const editorServer = express();
const findPackageJson = require("./lib/findPackageJson");
const findComponentDir = require("./lib/findComponentDir");
let clientRootDir = path.dirname(findPackageJson().filename);

if (clientRootDir == null) {
  console.log("could not find project root");
  process.exit(-1);
}
console.log("found package.json at", clientRootDir);

editorServer.set("clientRootDir", clientRootDir);

let clientComponentDir = findComponentDir(clientRootDir);
if (clientComponentDir == null) {
  console.log("could not find component dir");
  process.exit(-2);
}
console.log("found component directory", clientComponentDir);
