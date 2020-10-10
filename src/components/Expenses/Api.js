import React, { useState } from "react";
// let expenses = []
export const Context = React.createContext({});

function cFL(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function resCol(func, name) {
  return func ? name : null;
}

function RenderColumnDefault(props) {
  console.log("ExpenseApi, rendercolumndefault");
  return <div className={`Column ${cFL(props.column)}`}></div>;
}

function updateExpense(id, column, value) {}
function getAllExpenses() {
  return [
    {
      name: "Brian Parsons",
      purpose: "Debt bailout",
      type: "loan",
      amount: 1,
      startDate: "11/1/2020",
      endDate: "",
    },
    { name: "Kay Morris" },
  ];
}

function Api(props) {
  let [expenses, setExpenses] = useState(getAllExpenses());
  let columns = [
    resCol(props.renderName, "name"),
    resCol(props.renderPurpose, "purpose"),
    resCol(props.renderType, "type"),
    resCol(props.renderAmount, "amount"),
  ].filter((v) => v !== null);
  let Body = props.renderBody || ((props) => <>{props.children}</>);
  let RenderEach = props.renderEach || ((props) => <>{props.children}</>);

  return (
    <>
      {typeof props.renderHeader === "function"
        ? props.renderHeader(columns)
        : null}
      <Body>
        {expenses.map((expense, index) => {
          return (
            <RenderEach expenseId={expense.id}>
              {columns.map((column) => {
                let RenderColumn =
                  props[`render${cFL(column)}`] || RenderColumnDefault;

                return (
                  <RenderColumn
                    column={column}
                    expenseId={expense.id}
                    value={expense[column]}
                    onChange={(e) => {
                      console.log(
                        "oh cool! a component's value changed",
                        e,
                        column
                      );
                    }}
                  ></RenderColumn>
                );
              })}
            </RenderEach>
          );
        })}
      </Body>
    </>
  );
}

export default Api;
