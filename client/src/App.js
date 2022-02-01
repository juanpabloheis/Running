import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Home, Redirect, Activities, MonthlyState } from "./Pages/index";

export default function App() {
  return (
    <div className="main">
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/redirect" component={Redirect} />
        <Route path="/activities" component={Activities} />
        <Route path="/monthlystate" component={MonthlyState} />
      </Switch>
    </div>
  );
}