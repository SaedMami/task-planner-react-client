import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProjectForm from "./components/Project/AddProjectForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addProject" component={AddProjectForm} />
      </div>
    </Router>
  );
}

export default App;
