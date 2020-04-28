import React from "react";
import { createTask } from "../../../actions/ProjectBoardActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classnames from "classnames";

class AddProjectTaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      summary: "",
      acceptanceCriteria: "",
      dueDate: "",
      priority: 0,
      status: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    const projectCode = this.props.match.params.projectCode;
    this.props.createTask(projectCode, this.state, this.props.history);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render = () => {
    const projectCode = this.props.match.params.projectCode;
    const errors = this.props.errors;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link to={`/${projectCode}/board`} className="btn btn-light">
              Back to Project Board
            </Link>
            <h4 className="display-4 text-center">Add New Project Task</h4>
            <h3 className="lead text-center">{`Project: ${projectCode}`}</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.summary,
                  })}
                  name="summary"
                  placeholder="Project Task summary"
                  value={this.state.summary}
                  onChange={this.onChange}
                />
                {errors.summary && (
                  <div className="invalid-feedback">{errors.summary}</div>
                )}
              </div>
              <div className="form-group">
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Acceptance Criteria"
                  name="acceptanceCriteria"
                  value={this.state.acceptanceCriteria}
                  onChange={this.onChange}
                ></textarea>
              </div>
              <h6>Due Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="dueDate"
                  value={this.state.dueDate}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <select
                  className="form-control form-control-lg"
                  name="priority"
                  value={this.state.priority}
                  onChange={this.onChange}
                >
                  <option value={0}>Select Priority</option>
                  <option value={1}>High</option>
                  <option value={2}>Medium</option>
                  <option value={3}>Low</option>
                </select>
              </div>

              <div className="form-group">
                <select
                  className="form-control form-control-lg"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                >
                  <option value="">Select Status</option>
                  <option value="TO_DO">TO DO</option>
                  <option value="IN_PROGRESS">IN PROGRESS</option>
                  <option value="DONE">DONE</option>
                </select>
              </div>

              <input type="submit" className="btn btn-primary btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { createTask })(AddProjectTaskForm);
