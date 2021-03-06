import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";
import { connect } from "react-redux";
import { getProjects } from "../actions/ProjectActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <CreateProjectButton></CreateProjectButton>
              <br />
              <hr />
            </div>
          </div>
          {this.props.projects.map((project) => (
            <ProjectItem key={project.id} projectItem={project} />
          ))}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  projects: PropTypes.array.isRequired,
  getProjects: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  projects: state.project.allProjects,
});

export default connect(mapStateToProps, { getProjects })(Dashboard);
