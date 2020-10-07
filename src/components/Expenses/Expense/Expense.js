import React from "react";
import Expenses from "../Expenses";

import Name from "./Name/Name";
import Frequency from "./Frequency/Frequency";
import Type from "./Type/Type";
import Purpose from "./Purpose/Purpose";
import Amount from "./Amount/Amount";

function Date(props) {
  return <div className="Date">Date</div>;
}
function EndDate(props) {
  return (
    <div className="EndDate">
      {props.display === "table" ? null : (
        <div className="label">End Date:</div>
      )}{" "}
      {props.endDate || "none"}
    </div>
  );
}
function Display(props) {
  if (props.type === "table") {
    return (
      <tr className="Expense">
        {props.children.map((child, index) => {
          return <td key={index}>{child}</td>;
        })}
      </tr>
    );
  }
  return <div className="Expense">{props.children}</div>;
}

function Expense(props) {
  return (
    <Display type={props.display}>
      <Name
        onChange={props.onNameChange}
        value={props.name}
        display={props.display}
      />
      <Amount
        onChange={props.onAmountChange}
        value={props.amount}
        display={props.display}
      />
      <Type
        value={props.expenseType}
        onChange={props.onExpenseTypeChange}
        value={props.type}
        display={props.display}
      />
      <Frequency display={props.display} />
      <Date
        onChange={props.onStartDateChange}
        value={props.startDate}
        display={props.display}
      ></Date>

      <EndDate
        onChange={props.onEndDateChange}
        value={props.endDate}
        display={props.display}
      />
    </Display>
  );
}

// seperate component

Expense.Name = Name;
Expense.Frequency = Frequency;
Expense.Purpose = Purpose;
Expense.Amount = Amount;
Expense.Type = Type;

export default Expense;
