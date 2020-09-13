const db = require("../../db");
const readline = require("readline-sync");
const Locales = require("./Locales");
// init the database then call application main
try {
  console.log("Starting up...");
  console.log("Initiating database connection");
  db.init(main);
} catch (e) {
  console.error("error during startup: ", e);
}
let menuIndex = 0;
let localeId = null;
async function main(db) {
  //   console.log("database locales", db.locales);
  let locales = Locales(db, process.stdout.columns, process.stdout.rows);
  do {
    console.log(locales.render(localeId));
    localeId = readline.questionInt();
  } while (!locales.isValidLocaleId(localeId));
}
