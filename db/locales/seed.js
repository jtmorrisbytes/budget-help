const toml = require("toml");
const fs = require("fs");
const path = require("path");
module.exports = function seedLocales(db) {
  fs.readFile(path.join(__dirname, "metadata.toml"), (err, data) => {
    let metadata = toml.parse(data);
    db.locales
      .define_table()
      .then(() => {
        metadata.locales.forEach((row, index) => {
          db.locales
            .insert({ locale_id: index, ...row })
            .then(() => {
              console.log(`row ${index} insert successful`);
            })
            .catch(console.error);
        });
      })
      .then(() => {
        console.log("done inserting locales");
      });
  });
};
