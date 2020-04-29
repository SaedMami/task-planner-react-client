import React, { Component } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { deleteTask } from "../../../actions/ProjectBoardActions";
import { connect } from "react-redux";

const priorityStrings = {
  1: "High",
  2: "Medium",
  3: "Low",
};

class Task extends Component {
  render() {
    const { priority, projectCode, projectSequence } = this.props.task;
    return (
      <div className="card mb-1 bg-light">
        <div
          className={classnames("card-header text-primary", {
            "bg-danger text-light": priority === 1,
            "bg-warning text-light": priority === 2,
            "bg-info text-light": priority === 3,
          })}
        >
          Priority: {priorityStrings[this.props.task.priority]}
        </div>
        <div className="card-body bg-light">
          <h5 className="card-title">{this.props.task.summary}</h5>
          <p className="card-text text-truncate ">
            {this.props.task.acceptanceCriteria}
          </p>
          <Link
            to={`/${projectCode}/${projectSequence}/update`}
            className="btn btn-primary"
          >
            View / Update
          </Link>

          <button
            onClick={() => this.props.deleteTask(this.props.task)}
            className="btn btn-danger ml-4"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteTask })(Task);
