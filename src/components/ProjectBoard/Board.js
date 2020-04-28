import React, { Component } from "react";
import { Link } from "react-router-dom";
import TaskColumn from "./TaskColumn";
import { connect } from "react-redux";
import { getProjectTasks } from "../../actions/ProjectBoardActions";

class Board extends Component {
  componentDidMount() {
    const projectCode = this.props.match.params.projectCode;
    this.props.getProjectTasks(projectCode);
  }

  render() {
    const projectCode = this.props.match.params.projectCode;
    const tasks = this.props.tasks.sort((t1, t2) => t1.priority - t2.priority);
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
  }
}

const mapStateToProps = (state) => ({
  tasks: state.backlog.projectTasks,
});

export default connect(mapStateToProps, { getProjectTasks })(Board);
