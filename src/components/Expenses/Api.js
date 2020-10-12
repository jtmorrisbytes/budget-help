import React, { useState, useEffect } from "react";
import Axios from "axios";

import ApiManager from "../../components/ApiManager/ApiManager";

// let API_URL = process.env.REACT_APP_API_URL || "/api";
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

function updateOne(id, column, value) {}
function _getAll(API_URL) {
  return Axios.get(`${API_URL}/expenses`, {
    headers: { Accept: "application/json" },
  })
    .then((response) => {
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
  let getAll = _getAll.bind(null, props.API_BASE_PATH);
  let [context, updateContext] = useState({
    expenses: [],
    columns: [],
    error: {},
    initial: true,
    loading: true,
    onUpdateName: () => {},
    onUpdateType: () => {},
    onUpdatePurpose: () => {},
    onUpdateFrequency: () => {},
    onCreate: () => {},
    onDelete: () => {},
    getAll,
    getOne: () => {},
  });
  // get expenses on mount
  useEffect(() => {
    console.debug("Expenses Api initialization");
    getAll().then((expenses) => {
      if (Array.isArray(expenses)) {
        updateContext({ ...context, expenses, loading: false, initial: false });
      }
    });
  }, []);
  useEffect(() => {
    if (context.initial === false) {
      updateContext({ ...context, loading: true });
      getAll().then((newExpenses) => [
        updateContext({ ...context, expenses, loading: false }),
      ]);
    }
  }, [context.expenses, context.initial]);

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
              initial={context.initial}
            />
          );
        }}
      </Context.Consumer>
    );
  };
}

export default ApiManager.connect(Api);
