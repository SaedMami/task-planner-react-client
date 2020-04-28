import React, { Component } from "react";
import { Link } from "react-router-dom";
import TaskColumn from "./TaskColumn";
import { connect } from "react-redux";
import { getProjectTasks } from "../../actions/ProjectBoardActions";

class Board extends Component {
  componentWillMount() {
    const projectCode = this.props.match.params.projectCode;
    this.props.getProjectTasks(projectCode);
  }

  renderBoard = (tasks, projectCode) => {
    return (
      <div className="container">
        <Link to={`/${projectCode}/addTask`} className="btn btn-primary mb-3">
          <i className="fa fa-plus-circle"> Create Project Task</i>
        </Link>
        <br />
        <hr />

        <div className="container">
          <div className="row">
            <TaskColumn
              columnName="To Do"
              tasks={tasks.filter((task) => task.status === "TO_DO")}
            ></TaskColumn>
            <TaskColumn
              columnName="In Progress"
              tasks={tasks.filter((task) => task.status === "IN_PROGRESS")}
            ></TaskColumn>
            <TaskColumn
              columnName="Done"
              tasks={tasks.filter((task) => task.status === "DONE")}
            ></TaskColumn>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const projectCode = this.props.match.params.projectCode;
    const tasks = this.props.tasks.sort((t1, t2) => t1.priority - t2.priority);

    if (Object.keys(this.props.errors).length !== 0) {
      return (
        <div className="alert alert-danger text-center">
          {this.props.errors.projectCode}
        </div>
      );
    } else if (tasks.length === 0) {
      return (
        <div className="alert alert-info text-center">
          {`No tasks found for project: ${projectCode}`}
        </div>
      );
    } else {
      return this.renderBoard(tasks, projectCode);
    }
  }
}

const mapStateToProps = (state) => ({
  tasks: state.backlog.projectTasks,
  errors: state.errors,
});

export default connect(mapStateToProps, { getProjectTasks })(Board);
