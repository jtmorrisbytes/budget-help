const timezones = require("./metadata.json");

module.exports = async function seedTimezoneData(db) {
  console.log("Seeding Timezone Data...");
  try {
    await db.timezones.define_table();
    console.log("defined table for timezones");
    await db.withTransaction(async () => {
      timezones.forEach(async (timezone, tz_id) => {
        console.log(
          `attempting to insert timezone ${timezone.name} using tz_id: ${tz_id}`
        );
        await db.timezones.insert({
          tz_id,
          name: timezone.name,
          abbrev: timezone.abbrev,
          tz_offset: timezone.offset,
        });

        console.log(
          `Successfully inserted timezone ${timezone.name} with id ${tz_id}`
        );
      });
    });
  } catch (e) {
    console.error("Error seeding timezones", e);
  }
};
