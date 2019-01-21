import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import * as registerServiceWorker from "./serviceWorker";

import './css/container.css';
import './css/page-title.css';
import './css/todo.css';

import Main from "./components/js/Main";
import TodoApp from "./components/js/TodoApp";


ReactDOM.render(
  <Router>
    <Route path="/">
      <Main>
        <Switch>
          <Route exact path="/todos" component={TodoApp} />
          <Redirect to="/todos" />
        </Switch>
      </Main>
    </Route>
  </Router>,
  // <TodoApp></TodoApp>,
  document.getElementById("root")
);
registerServiceWorker.unregister();
