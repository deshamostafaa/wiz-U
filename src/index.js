import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/index";
import { Provider } from "react-redux";
const domContainer = document.querySelector("#root");
const root = createRoot(domContainer);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
