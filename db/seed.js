require("dotenv").config();

const fs = require("fs");

const massive = require("massive");

const { DATABASE_URL } = process.env;

massive({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false },
}).then(async (db) => {
  // require("./languages/seed")(db);
  await require("./locales/seed")(db);
  await require("./timezones/seed")(db);
  await require("./calendars/seed")(db);
  // await require("./user/seed")(db);
});
