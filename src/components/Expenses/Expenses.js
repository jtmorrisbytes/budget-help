import React, { useState } from "react";
import Expense from "./Expense/Expense";

import "./Expenses.scss";
import "./Expense/Expense.css";

import ExpenseApi from "./Api";
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
        <ExpenseApi>
          <ExpenseApi.Add
            render={(props) => {
              return <button {...props}>Add Something!</button>;
            }}
          />
          {/* <ExpenseApi.Header render={()=>{}}> */}
          {/* <ExpenseApi.Each.Column></ExpenseApi.Each.Column> */}
        </ExpenseApi>
      </table>
    </div>
  );
}
export default Expenses;
