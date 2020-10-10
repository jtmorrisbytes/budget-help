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

function Body(props) {
  return <Context.Consumer>{(value) => {}}</Context.Consumer>;
}
function Add(props) {
  return (
    <Context.Consumer>
      {(value) => {
        return props.render();
      }}
    </Context.Consumer>
  );
}
function Each(props) {
  return (
    <Context.Consumer>
      {(value) => {
        return <div>hello from each</div>;
      }}
    </Context.Consumer>
  );
}
function Api(props) {
  let [expenses, setExpenses] = useState(getAllExpenses());
  return (
    <>
      <Context.Provider value={expenses}>{props.children}</Context.Provider>
    </>
  );
}
Api.Body = Body;
Api.Add = Add;
Api.Each = Each;
export default Api;
