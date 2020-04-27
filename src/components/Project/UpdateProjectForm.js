import React, { Component } from "react";
import { getProjectByCode, createProject } from "../../actions/ProjectActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class UpdateProjectFrom extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      startDate: "",
      endDate: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const updatedProject = {
      ...this.props.project,
      name: this.state.name,
      description: this.state.description,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    };

    this.props.createProject(updatedProject, this.props.history);
  };

  componentDidMount() {
    this.props.getProjectByCode(this.props.match.params.id, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.project) {
      this.setState(nextProps.project);
    }

    if (nextProps.errors) {
      this.render();
    }
  }

  render() {
    const { name, description, startDate, endDate } = this.state;
    const errors = this.props.errors;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h5 className="display-4 text-center">Update Project form</h5>
            <hr />
            <form onSubmit={this.onSubmit}>
              <h6>Project Name</h6>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.name,
                  })}
                  name="name"
                  value={name}
                  onChange={this.onChange}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <h6>Project Code</h6>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder={this.props.match.params.id}
                  name="projectCode"
                  disabled
                />
              </div>
              <h6>Project description</h6>
              <div className="form-group">
                <textarea
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.description,
                  })}
                  name="description"
                  value={description}
                  onChange={this.onChange}
                ></textarea>
                {errors.description && (
                  <div className="invalid-feedback">{errors.description}</div>
                )}
              </div>
              <h6>Start Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="startDate"
                  value={startDate}
                  onChange={this.onChange}
                />
              </div>
              <h6>Estimated End Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="endDate"
                  value={endDate}
                  onChange={this.onChange}
                />
              </div>

              <input type="submit" className="btn btn-primary btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

UpdateProjectFrom.propTypes = {
  getProjectByCode: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project.currentProject,
  errors: state.errors,
});

export default connect(mapStateToProps, { getProjectByCode, createProject })(
  UpdateProjectFrom
);
