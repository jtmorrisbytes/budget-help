const calendars = require("./metadata.json");
module.exports = function seedCalendars(db) {
  console.log("Seeding Calendar data");
  console.log(`Calendars: ${calendars}`);
  db.calendars
    .define_table()
    .then(() => {
      calendars.forEach((row, calendar_id) => {
        db.calendars.insert({ calendar_id, ...row.name }).then(() => {
          console.log(
            `successfully inserted {calendar_id: ${calendar_id},name:${row.name}}`
          );
        });
      });
    })
    .then(() => {
      console.log("Done seeding Calendar data");
    });
};
