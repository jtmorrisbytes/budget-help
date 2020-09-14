import React from "react";
import { Route, Switch } from "react-router-dom";
// components
import Settings from "./components/Settings/Settings";
import Expenses from "./components/Expenses/Expenses";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Expenses} />
      <Route path={Login.route} component={Login} />
      <Route path={Register.route} component={Register} />
      <Route path="/settings" component={Settings} />
    </Switch>
  );
}
