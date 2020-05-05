import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProjectForm from "./components/Project/AddProjectForm";
import UpdateProjectForm from "./components/Project/UpdateProjectForm";
import Board from "./components/ProjectBoard/Board";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import AddTaskForm from "./components/ProjectBoard/Tasks/AddProjectTaskForm";
import UpdateTaskForm from "./components/ProjectBoard/Tasks/UpdateTaskForm";
import Landing from "./components/Layout/Landing";
import Register from "./components/user_manegement/Register";
import Login from "./components/user_manegement/Login";
import jwt_decode from "jwt-decode";
import { setTokenInHeader } from "./securityUtils/setTokenInHeader";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/SecurityActions";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setTokenInHeader(jwtToken);
  const decoded = jwt_decode(jwtToken);
  store.dispatch({ type: SET_CURRENT_USER, payload: decoded });
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route component={Header}></Route>

          {
            // public routes
          }
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          {
            // private routes
          }
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addProject" component={AddProjectForm} />
          <Route
            exact
            path="/updateProject/:id"
            component={UpdateProjectForm}
          />
          <Route exact path="/:projectCode/board" component={Board}></Route>

          <Route
            exact
            path="/:projectCode/addTask"
            component={AddTaskForm}
          ></Route>

          <Route
            exact
            path="/:projectCode/:projectSequence/update"
            component={UpdateTaskForm}
          ></Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
