import React from "react";
import { Route, Switch } from "react-router-dom";

import Settings from "./components/Settings/Settings";
import Expenses from "./components/Expenses/Expenses";
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Expenses} />
      <Route path="/settings" component={Settings} />
    </Switch>
  );
}
