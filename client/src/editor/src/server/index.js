const express = require("express");
const path = require("path");

const findPackageJson = require("./lib/findPackageJson");

clientRootDir = path.dirname(findPackageJson().filename);

if (clientRootDir == null) {
  console.log("could not find project root");
  process.exit(-1);
}

console.log("found package.json at", clientRootDir);
