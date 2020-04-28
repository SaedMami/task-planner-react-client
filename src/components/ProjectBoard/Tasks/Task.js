import React, { Component } from "react";
import classnames from "classnames";

const priorityStrings = {
  1: "High",
  2: "Medium",
  3: "Low",
};

class Task extends Component {
  render() {
    const { priority } = this.props.task;
    return (
      <div className="card mb-1 bg-light">
        <div
          className={classnames("card-header text-primary", {
            "bg-danger text-light": priority === 3,
            "bg-warning text-light": priority === 2,
            "bg-info text-light": priority === 1,
          })}
        >
          Priority: {priorityStrings[this.props.task.priority]}
        </div>
        <div className="card-body bg-light">
          <h5 className="card-title">{this.props.task.summary}</h5>
          <p className="card-text text-truncate ">
            {this.props.task.acceptanceCriteria}
          </p>
          <a href="#" className="btn btn-primary">
            View / Update
          </a>

          <button className="btn btn-danger ml-4">Delete</button>
        </div>
      </div>
    );
  }
}

export default Task;
