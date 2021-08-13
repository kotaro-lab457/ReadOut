import React from "react";
import ReactDOM from "react-dom";

import Router from "./router/router";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import "./css/index.css";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
