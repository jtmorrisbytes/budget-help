console.log(require("dotenv").config());
const Express = require("express");
const Router = Express.Router;
class Expense {
  name = "";
  type = 0;
  frequency = 0;
  start = "1970-01-01";
  end = null;
  constructor(
    nname = name,
    ntype = type,
    nfrequency = frequency,
    nstart,
    nend
  ) {
    return {
      name: nname,
      type: ntype,
      frequency: nfrequency,
      start: nstart,
      end: nend,
    };
  }
}

let expenses = [new Expense("Brian Parsons", 0, 1)];

const { API_URL } = process.env;

const app = Express();

const expensesRouter = Router();

expensesRouter.get("/expenses", (req, res) => {
  res.json(expenses);
});
// creating duplicates is okay
expensesRouter.post("/expense/:id", (req, res) => {
  if (req.is("json")) {
    let { name, type, purpose, frequency, start, end } = req.body;
    if (req.params.id) {
      res.status(501).json("not implemented");
    } else {
      let expense = new Expense(name, type, frequency, start, end);
      expenses.push(expense);
      res.status(201);
      if (req.headers.accept.includes("application/json")) {
        res.json();
      } else {
        res.send("Created");
      }
    }
  } else {
    res.setHeader("Accept", "application/json");
    res.status(415);
    if (req.headers.accept.includes("application/json")) {
      res.json({ error: "invalid content type", accept: "application/json" });
    } else {
      res.send();
    }
  }
});
app.use(Express.json());
app.use(API_URL, expensesRouter);

app.listen(8080, "localhost", () => {
  console.log("server is ready");
});
