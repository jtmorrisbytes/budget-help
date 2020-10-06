import React from "react";
import Expenses from "../Expenses";

import Name from "./Name/Name";
import Frequency from "./Frequency/Frequency";
import Type from "./Type/Type";
import Purpose from "./Purpose/Purpose";
import Amount from "./Amount/Amount";

function Expense(props) {
  let edit = true;
  return (
    <div className="Expense">
      <Name onChange={props.onNameChange} value={props.name} />

      <Amount onChange={props.onAmountChange} value={props.amount} />
      <Type value={props.expenseType} onChange={props.onExpenseTypeChange} />
    </div>
  );
}

// seperate component

Expense.Name = Name;
Expense.Frequency = Frequency;
Expense.Purpose = Purpose;
Expense.Amount = Amount;
Expense.Type = Type;

export default Expense;
