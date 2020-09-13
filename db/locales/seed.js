const toml = require("toml");
const fs = require("fs");
const path = require("path");
let locales = require("./metadata.json");
module.exports = async function seedLocales(db) {
  try {
    await db.locales.define_table();
    await db.withTransaction(async () => {
      for (let locale_id = 0; locale_id < locales.length; locale_id++) {
        let locale = locales[locale_id];
        console.log(
          `Attempting to insert locale ${JSON.stringify({
            locale_id,
            ...locale,
          })}`
        );
        await db.locales.insert({
          locale_id,
          name: locale.name,
          label: locale.label,
        });
        console.log("Insert successful");
      }
    });
  } catch (e) {
    console.error(
      "Error inserting locales into database:",
      e.message,
      e.column
    );
    process.exit(-1);
  }
};
