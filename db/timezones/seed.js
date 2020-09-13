const timezones = require("./metadata.json");

module.exports = function seedTimezoneData(db) {
  console.log("Seeding Timezone Data...");
  db.timezones.define_table().then(() => {
    console.log("defined table for timezones");
    timezones.forEach((timezone, tz_id) => {
      console.log(`inserting timezone ${timezone.name} using tz_id: ${tz_id}`);
    });
  });
};
