const parser = require("@babel/parser");
const fs = require("fs");
const path = require("path");

let componentDirs = fs.readdirSync(path.join(__dirname, "components"));
//   .filter((entry) => {
//     fs.stat(path.join(__dirname, "components",entry));
//   });
let components;

componentDirs.forEach((componentDir) => {
  console.log(
    fs.readdirSync(path.join(__dirname, "components", componentDir), {
      withFileTypes: true,
    })
  );
});
