import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import Login from "./Login";
import MainPage from "./MainPage";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/MainPage" exact component={MainPage} />
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
