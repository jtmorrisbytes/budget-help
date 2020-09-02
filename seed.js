console.log(require("dotenv").config());
const massive = require("massive");
const { DATABASE_URL } = process.env;
console.log(DATABASE_URL);
console.log(process.env);
massive({ connectionString: DATABASE_URL, ssl: { rejectUnauthorized: false } })
  .then(async (db) => {
    await db.seed();
    // try {
    //   await db.seed_income();
    // } catch (e) {
    //   console.log("error seeding income", e);
    // }
    // try {
    //   await db.seed_deductions();
    // } catch (e) {
    //   console.log("error seeding deductions", e);
    // }
    // try {
    //   await db.seed_loans();
    // } catch (e) {
    //   console.error("error seeding loans", e);
    // }
    // try {
    //   await db.seed_expenses();
    // } catch (e) {
    //   console.error("error seeding expenses", e);
    //   console.error(e);
    // }
  })
  .catch((error) => {
    console.error("Database connection failed:");
    console.error(error);
  });
