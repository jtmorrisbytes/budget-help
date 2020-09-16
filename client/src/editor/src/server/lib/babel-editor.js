const parser = require("@babel/parser");
const fs = require("fs");
const path = require("path");

let exampleJsx =
  "<div props={hello} style={{color:'red'}}>this is a test </div>";
let parsed = parser.parse(exampleJsx, { plugins: ["jsx"] });

console.log(
  "parsed jsx example",
  parsed.program.body[0].expression.openingElement
);
