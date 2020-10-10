import React from "react";
import Expenses from "../Expenses";

import { ApiContext } from "../Api";

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
  return (props.columns || []).map((column) => {
    let Component = () => null;
    switch ((column.name || column).toLowerCase()) {
      case "name":
        Component = Name;
        break;
      case "type":
        Component = Type;
        break;
      case "frequency":
        Component = Frequency;
        break;
      case "purpose":
        Component = Purpose;
      case "amount":
        Component = Amount;
    }
    return <Component onChange={props.onChange} />;
  });
}

// seperate component

Expense.Name = Name;
Expense.Frequency = Frequency;
Expense.Purpose = Purpose;
Expense.Amount = Amount;
Expense.Type = Type;
Expense.Date = Date;

export default Expense;
