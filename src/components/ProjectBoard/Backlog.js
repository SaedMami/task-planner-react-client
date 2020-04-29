import React, { Component } from "react";
import TaskColumn from "./TaskColumn";

class Backlog extends Component {
  render() {
    const tasks = this.props.tasks;
    return (
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
    );
  }
}

export default Backlog;
