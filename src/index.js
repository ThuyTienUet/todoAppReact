import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import * as registerServiceWorker from "./serviceWorker";

import './css/container.css';
import './css/page-title.css';
import './css/todo.css';

import TodoApp from "./components/js/TodoApp";


ReactDOM.render(
  <Router>
    <Route exact path="/todos" component={TodoApp} />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker.unregister();
