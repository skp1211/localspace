import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { adminRouters } from "./routes";
import "antd/dist/reset.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>我是app组件</h1>
      <Switch>
        {adminRouters.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={(routeProps) => {
                return <route.component {...routeProps} />;
              }}
            />
          );
        })}
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
