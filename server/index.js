// const rlSync = require("readline-sync");
// BUDGETING HELP
// GOAL1: given a list of expenses, an hourly rate,
//       maximum regular hours (where applicable),
//       maximum overtime hours (where applicable),
//       maximum total hours ( where applicable),
//       overtime hourly multipler ( where applicable),
//       pay period frequency
//   calulate the amount of hours needed to make the budget work

/* encoding dates: frequency
* how to encode date frequencies?
* ex: 
*  1. every X days starting from (date)
*  2. every X weeks on day of week starting from (date) 
*  3. every X months on (day) starting from (Month), (Day) (Year)
*  4. every X years starting on (DAY, MONTH, Year)
* 
time_zones
Date_Codes
* DAILY = 0
* WEEKLY = 1
* MONTHLY = 2
* YEARLY = 3
* 
Starting_date

*/

console.log(require("dotenv").config());
const massive = require("massive");
const express = require("express");
const morgan = require("morgan");
const server = express();

const database = require("../db");

const router = require("./controllers");

server.use(morgan("dev"));
server.use(express.json());
server.use("/api/", router);
const { DATABASE_URL } = process.env;
console.log(DATABASE_URL);
// console.log(process.env);
database.init((db) => {
  server.set("db", db);
  server.listen(8080, "localhost", () => {
    console.log("server is ready on localhost:8080");
  });
});
