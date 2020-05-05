import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/SecurityActions";

class Header extends Component {
  render() {
    const { validToken } = this.props.security;
    const { fullName } = this.props.security.currentUser;
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/dashboard">
            Task Planner Tool
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse d-flex flex-row justify-content-between"
            id="mobile-nav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                {validToken && (
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                )}
              </li>
            </ul>

            <ul className="navbar-nav">
              {!validToken && (
                <li className="nav-item">
                  <Link className="nav-link " to="/register">
                    Sign Up
                  </Link>
                </li>
              )}
              {!validToken && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}

              {validToken && (
                <li className="nav-item">
                  <span className="navbar-text">
                    <i className="fa fa-user-circle mr-1"></i>
                    {fullName}
                  </span>
                </li>
              )}
              <li className="nav-item">
                {validToken && (
                  <a
                    onClick={(e) => this.props.logout(this.props.history)}
                    className="nav-link"
                  >
                    Logout
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  security: state.security,
});

export default connect(mapStateToProps, { logout })(Header);
