import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Expenses from "./components/Expenses/Expenses";
import Expense from "./components/Expenses/Expense/Expense";
function App() {
  return (
    <div className="App">
      {/* expenses:
        who do I owe,
        what it is for
        how much do I owe,
        how often,

      */}
      <Expenses display="table">
        <Expense
          name="Brian Parsons"
          amount={100}
          type="loan"
          date="11/1/2020"
        />
      </Expenses>
    </div>
  );
}

export default App;
