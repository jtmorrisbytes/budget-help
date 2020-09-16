const express = require("express");

const findProjectRoot = require("./lib/findProjectRoot");

clientRootDir = findProjectRoot();

if (clientRootDir == null) {
  console.log("could not find project root");
  process.exit(-1);
}

console.log("found package.json at", clientRootDir);
