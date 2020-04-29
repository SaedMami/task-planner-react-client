import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProjectTasks } from "../../actions/ProjectBoardActions";
import Backlog from "./Backlog";

class Board extends Component {
  componentDidMount() {
    const projectCode = this.props.match.params.projectCode;
    this.props.getProjectTasks(projectCode);
  }

  renderCreateTaskButton(projectCode) {
    return (
      <Link to={`/${projectCode}/addTask`} className="btn btn-primary mb-3">
        <i className="fa fa-plus-circle"> Create Project Task</i>
      </Link>
    );
  }

  render() {
    const projectCode = this.props.match.params.projectCode;
    const tasks = this.props.tasks.sort((t1, t2) => t1.priority - t2.priority);

    let content;

    if (Object.keys(this.props.errors).length !== 0) {
      content = renderErrors(this.props.errors);
    } else {
      content = renderTasks(projectCode, tasks);
    }

    return <div className="container">{content}</div>;
  }
}

const renderTasks = (projectCode, tasks) => {
  if (tasks.length === 0) {
    return (
      <React.Fragment>
        <CreateTaskButton projectCode={projectCode} />
        <ZeroTasks projectCode={projectCode}></ZeroTasks>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <CreateTaskButton projectCode={projectCode} />
        <Backlog tasks={tasks}></Backlog>
      </React.Fragment>
    );
  }
};

const CreateTaskButton = (props) => {
  return (
    <Link to={`/${props.projectCode}/addTask`} className="btn btn-primary mb-3">
      <i className="fa fa-plus-circle"> Create Project Task</i>
    </Link>
  );
};

const ZeroTasks = (props) => {
  return (
    <React.Fragment>
      <div className="alert alert-info text-center">
        {`No tasks found for project: ${props.projectCode}`}
      </div>
    </React.Fragment>
  );
};

const renderErrors = (errors) => {
  return (
    <div className="alert alert-danger text-center">{errors.projectCode}</div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.backlog.projectTasks,
  errors: state.errors,
});

export default connect(mapStateToProps, { getProjectTasks })(Board);
