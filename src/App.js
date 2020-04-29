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

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
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
