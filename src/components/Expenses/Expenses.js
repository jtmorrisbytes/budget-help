import React, { useState } from "react";
import Expense from "./Expense/Expense";

import "./Expenses.scss";
import "./Expense/Expense.css";

import ExpenseApi from "./Api";

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
  let [expenses, updateExpenses] = useState([
    {
      name: "Brian Parsons",
      purpose: "Debt bailout",
      type: "loan",
      amount: 1,
      startDate: "11/1/2020",
      endDate: "",
    },
    { name: "Kay Morris" },
  ]);

  return (
    <div className="Expenses">
      <button>Add Expense</button>
      <table>
        <ExpenseApi
          // className={""}

          limit={50}
          renderHeader={(columns) => {
            return (
              <thead>
                <tr>
                  {columns.map((column) => {
                    return (
                      <td>{column.name || capitalizeFirstLetter(column)}</td>
                    );
                  })}
                </tr>
              </thead>
            );
          }}
          renderBody={(props) => {
            return <tbody>{props.children}</tbody>;
          }}
          renderName={(props) => {
            return (
              <td>
                <Expense.Name value={props.value} onChange={props.onChange} />
              </td>
            );
          }}
          renderAmount={(props) => {
            return (
              <td>
                <Expense.Amount value={props.value} />
              </td>
            );
          }}
          renderEach={(props) => {
            console.log("renderEach", props);
            return <tr>{props.children}</tr>;
          }}
        />
      </table>
    </div>
  );
}
export default Expenses;
