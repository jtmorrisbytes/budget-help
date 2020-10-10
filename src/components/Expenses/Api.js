import React, { useState, useEffect } from "react";
import Axios from "axios";
let API_URL = process.env.REACT_APP_API_URL || "/api";
let expenses = [
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
  return Axios.get(`${API_URL}/expenses`, {
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      console.log("getallexpenses response", response);
      if (String(response.headers["content-type"]).includes("application/json"))
        if (Array.isArray(response.data)) {
          return response.data;
        } else {
          console.warn(
            "ExpensesApi client recieved invalid body data type, Expecting array:",
            response.data
          );
        }
      else {
        console.warn(
          "Expenses Api client recieved an invalid content type, expecting application/json",
          response.headers
        );
      }
      return null;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}
function getColumns() {
  return ["name", "purpose", "frequency"];
}

function Api(props) {
  let [expenses, setExpenses] = useState([]);

  let [columns, updateColumns] = useState(getColumns());
  let [error, setError] = useState({});
  let [loading, setLoadingState] = useState(false);
  let [context, updateContext] = useState({
    expenses,
    columns,
    error,
    loading,
    onUpdateName: () => {},
    onUpdateType: () => {},
    onUpdatePurpose: () => {},
    onUpdateFrequency: () => {},
    onCreate: () => {},
    onDelete: () => {},
  });
  // get expenses on mount
  useEffect(() => {
    getAllExpenses().then((expenses) => {
      if (Array.isArray(expenses)) {
        setExpenses(expenses);
        updateContext({ ...context, expenses });
      }
    });
  }, []);

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
}

export function connectExpenseApi(Component) {
  return function Connected(props) {
    return (
      <Context.Consumer>
        {(context) => {
          return (
            <Component
              expenses={context.expenses}
              onUpdateName={context.onUpdateName}
              onUpdatePurpose={context.onUpdatePurpose}
              onUpdateType={context.onUpdateType}
              onUpdateFrequency={context.onUpdateFrequency}
              onCreate={context.onCreate}
              onDelete={context.onDelete}
              error={context.error}
              expenses={context.expenses}
              loading={context.loading}
            />
          );
        }}
      </Context.Consumer>
    );
  };
}

export default Api;
