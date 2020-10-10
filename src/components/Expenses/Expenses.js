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

  return (
    <div className="Expenses">
      {props.expenses.map((expense, index) => {
        return (
          <div key={expense.id || index} className="Expense">
            <div className="Name">{expense.name}</div>
          </div>
        );
      })}
    </div>
  );
}
export default connectExpenseApi(Expenses);
