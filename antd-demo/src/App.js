import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { adminRouters } from "./routes";
import Frame from "./components/Frame/Index";

import "antd/dist/reset.css";
import "./App.css";

function App() {
  return (
    <Frame>
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
    </Frame>
  );
}

export default App;
