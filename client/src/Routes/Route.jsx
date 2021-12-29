import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import Admin from "../components/Admin";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";

function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        <Route path="login" exact>
          <Login />
        </Route>
        <Route path="admin" exact>
          <Admin />
        </Route>

        <Route>
          <h1>404:Page Not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
