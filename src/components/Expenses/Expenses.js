import React, { useState } from "react";
import Expense from "./Expense/Expense";

import "./Expenses.scss";
import "./Expense/Expense.css";

import ExpenseApi, { connectExpenseApi } from "./Api";
import Api from "./Api";

function capitalizeFirstLetter(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

let defaultRenderMethod = "table";
let defaultColumns = ["name", "type", "frequency", "amount"];
const Display = {
  Table: function Table(props) {
    console.log("displaying expenses as a table", props);
    return (
      <table>
        {/* header column includes column names */}
        <thead>
          <tr>
            {(props.columns || []).map((column) => {
              return (
                <td>{column.charAt(0).toUpperCase() + column.slice(1)}</td>
              );
            })}
          </tr>
          {(props.expenses || []).map((expense) => {
            return (
              <tr>
                {(props.columns || []).map((column) => {
                  let Component = Expense[capitalizeFirstLetter(column)];
                  console.log("Component", Component);
                  if (!Component) {
                    return null;
                  }
                  return (
                    <td>
                      <Component
                        value={expense[column.toLowerCase()]}
                        onChange={(e) => {
                          props.onChange(e, column);
                        }}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </thead>
      </table>
    );
  },
};
function Expenses(props) {
  console.log("Expenses props", props);
  if (props.intial === true) {
    return <div className="Expenses">starting up... please wait</div>;
  } else if (props.loading === true) {
    return <div>spinner</div>;
  }

  return (
    <table className="Expenses">
      {props.expenses.map((expense, index) => {
        return (
          <tr key={expense.id || index} className="Expense">
            <td className="Name">{expense.name}</td>
            <td className="Purpose">{expense.purpose} </td>
            <td className="Amount">{expense.amount}</td>
          </tr>
        );
      })}
    </table>
  );
}
export default connectExpenseApi(Expenses);
