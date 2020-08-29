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

const DATE_FREQUENCY_TYPE = {
  0: "DAILY",
  1: "WEEKLY",
  2: "MONTHLY",
  3: "YEARLY",
  DAILY: 0,
  WEEKLY: 1,
  MONTHLY: 2,
  YEARLY: 3,
};
// settings
let HOURLY_RATE = 15;
let OVERTIME_MULTIPLIER = 1.5;
// let DOUBLE_TIME_MULTIPLIER = 2.0;
let MAXIMUM_REGULAR_HOURS = 40;
let MAXIMUM_OVERTIME_HOURS = 20;
let MAXIMUM_TOTAL_HOURS = 60;
let CURRENCY = "$";
let PAY_FREQUENCY_TYPE = DATE_FREQUENCY_TYPE.WEEKLY;
let PAY_FREQUENCY = 2;
//yyyy-mm-dd
let TIMEZONE = "GMT-0600";
let PAY_START = "2020-08-21 " + TIMEZONE;
let payStartDate = new Date(PAY_START);
let LOCALE = "en-US";

let income = [
  {
    name: "Amazon.com",
    type: "hourly",
    rate: 15,
    overtimeRate: 1.5,
    regularHours: 30,
    overtimeHoursStart: 40,
    startingDate: "2020-08-21",
    maxHours: 60,
    frequencyType: DATE_FREQUENCY_TYPE.WEEKLY,
    frequency: 2,
    dayOfWeek: 6,
  },
];

let budget = [
  {
    name: "Affirm.com -- walmart.com apple watch series 3",
    frequency: 1,
    frequencyType: DATE_FREQUENCY_TYPE.MONTHLY,
    startingDate: "2020-09-14",
    dayOfMonth: 14,
    endingDate: "2021-09-14",
    payment: 17.42,
    balance: 182.94,
    type: "expense",
    expenseType: "Loan",
  },
  {
    name: "Loan To Mom",
    frequency: 1,
    frequencyType: DATE_FREQUENCY_TYPE.MONTHLY,
    type: "expense",
    balance: 2000,
    payment: 200,
    startingDate: "09-1-2020",
    dayOfMonth: 1,
  },
];
let today = new Date(TIMEZONE);
let dateDisplayStart = new Date(today.getFullYear(), today.getMonth(), 1);
let dateDisplayEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
console.log("start", dateDisplayStart, "end", dateDisplayEnd);
let totalCost = 0;
// filter out bills that dont occur between start and end
let expenses = [];
budget
  .filter((entry) => {
    switch (entry.frequencyType) {
      case DATE_FREQUENCY_TYPE.MONTHLY:
        console.log(dateDisplayStart.getDate(), dateDisplayEnd.getDay());
        return (
          entry.dayOfMonth >= dateDisplayStart.getDate() &&
          entry.dayOfMonth <= dateDisplayEnd.getDate()
        );
      default:
        return true;
    }
  })
  .forEach((entry) => {
    let expense = { frequencyType: entry.frequencyType, amount: 0 };
    switch (entry.frequencyType) {
      case DATE_FREQUENCY_TYPE.MONTHLY:
        expense.amount = entry.payment;
        expenses.push(expense);
    }
  });
expenseTotal = expenses.reduce((acc, expense) => {
  return (acc += expense.amount || 0);
}, 0);

console.log(expenseTotal);
