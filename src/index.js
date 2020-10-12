import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import ExpenseApi from "./components/Expenses/Api";
import ApiManager from "./components/ApiManager/ApiManager";
ReactDOM.render(
  <React.StrictMode>
    <ApiManager>
      <ExpenseApi>
        <App />
      </ExpenseApi>
    </ApiManager>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
