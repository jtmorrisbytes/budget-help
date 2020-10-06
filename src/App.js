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
      <Expenses>
        <Expense name="Brian Parsons" amount={100} />
      </Expenses>
    </div>
  );
}

export default App;
