import React, { Component } from "react";
import { connect } from "react-redux";
import { createNewUser } from "../../actions/SecurityActions";
import classnames from "classnames";
import { GET_ERRORS } from "../../actions/types";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      username: "",
      password: "",
    };
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createNewUser(this.state, this.props.history);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create your Account</p>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.fullName,
                  })}
                  placeholder="Name"
                  name="fullName"
                  value={this.state.fullName}
                  onChange={this.onChange}
                />
                {errors.fullName && (
                  <div className="invalid-feedback">{errors.fullName}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.username,
                  })}
                  placeholder="Email Address"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                {errors.username && (
                  <div className="invalid-feedback">{errors.username}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.password,
                  })}
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
});

const clearErrors = () => (dispatch) => {
  dispatch({ type: GET_ERRORS, payload: "" });
};

export default connect(mapStateToProps, { createNewUser, clearErrors })(
  Register
);
