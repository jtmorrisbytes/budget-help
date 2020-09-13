require("dotenv").config();

const fs = require("fs");

const massive = require("massive");

const { DATABASE_URL } = process.env;

massive({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  // require("./languages/seed")(db);
  require("./locales/seed")(db);
  require("./calendars/seed")(db);
});
