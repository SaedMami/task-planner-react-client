import React, { Component } from "react";
import Task from "./Tasks/Task";

class TaskColumn extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="card text-center mb-2">
          <div className="card-header bg-secondary text-white">
            <h3>{this.props.columnName}</h3>
          </div>
        </div>
        {this.props.tasks.map((task) => (
          <Task key={task.projectSequence} task={task} />
        ))}
      </div>
    );
  }
}

export default TaskColumn;
