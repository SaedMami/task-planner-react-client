import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteProjectByCode } from "../../actions/ProjectActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ProjectItem extends Component {
  constructor() {
    super();
    this.onDeleteProject = this.onDeleteProject.bind(this);
  }

  onDeleteProject(e) {
    const { projectCode } = this.props.projectItem;
    if (
      window.confirm(
        `Are you sure you want to delete project ${projectCode} and all the data assoicated with it?`
      )
    ) {
      this.props.deleteProjectByCode(projectCode);
    }
  }

  render() {
    const { name, description, projectCode } = this.props.projectItem;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">{projectCode}</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
                <a href="#">
                  <li className="list-group-item board">
                    <i className="fa fa-flag-checkered pr-1">Project Board </i>
                  </li>
                </a>
                <Link to={`/updateProject/${projectCode}`}>
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1">Update Project Info</i>
                  </li>
                </Link>
                <li
                  onClick={this.onDeleteProject}
                  className="list-group-item delete"
                >
                  <i className="fa fa-minus-circle pr-1">Delete Project</i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProjectItem.propTypes = {
  deleteProjectByCode: PropTypes.func.isRequired,
};

export default connect(null, { deleteProjectByCode })(ProjectItem);
