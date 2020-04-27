import React, { Component } from "react";

const priority = {
  1: "High",
  2: "Low",
  3: "Medium",
};

class Task extends Component {
  render() {
    return (
      <div className="card mb-1 bg-light">
        <div className="card-header text-primary">
          Priority: {priority[this.props.task.priority]}
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
