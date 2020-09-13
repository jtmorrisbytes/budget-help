const db = require("../../db");
// init the database then call application main
db.init(main);

async function main(db) {
  console.log("hello from command line main");
}
