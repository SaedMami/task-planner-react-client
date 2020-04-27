import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProjectForm from "./components/Project/AddProjectForm";
import UpdateProjectForm from "./components/Project/UpdateProjectForm";
import ProjectBoard from "./components/ProjectBoard/ProjectBoard";
import { Provider } from "react-redux";
import store from "./store/configureStore";

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
          <Route
            exact
            path="/board/:projectCode"
            component={ProjectBoard}
          ></Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
