const calendars = require("./metadata.json");
module.exports = async function seedCalendars(db) {
  console.log("Seeding Calendar data");
  console.log(`Calendars: ${calendars}`);
  await db.calendars.define_table();
  await db.withTransaction(async () => {
    calendars.forEach(async (row, calendar_id) => {
      await db.calendars.insert({ calendar_id, ...row.name });
      console.log(
        `successfully inserted {calendar_id: ${calendar_id},name:${row.name}}`
      );
    });
  });
  console.log("Done seeding Calendar data");
};
