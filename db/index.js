// set up enviornment variables
require("dotenv").config();
// require any external dependancies
const massive = require("massive");
// require any internal modules
const locales = require("./locales");
// grab t
const { DATABASE_URL } = process.env;

function init(callback, options) {
  options = {
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false, ...options?.ssl },
    ...options,
  };
  massive(options).then((db) => {
    db = { ...locales, ...db };
    console.log(db);

    callback?.(db);
  });
}
module.exports = { init, locales };
