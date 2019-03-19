import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

class Navbar extends Component {
  onLogoutClick(event) {
    event.preventDefault();
  }
  render() {
    const { isAuthenticated } = this.props;
    const authLinks = (
      <ul className="navbar-nav ml-auto ">
        <li className="nav-item">
          <Link className="nav-link text-light" to="/feed">
            PostFeed
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item ">
          <a
            href="#"
            onClick={this.props.logout}
            className="nav-link text-light"
          >
            <img
              src=""
              alt=".."
              style={{ width: "25px", marginRight: "5px" }}
              className="rounded-circle"
            />
            LOGOUT
          </a>
        </li>
      </ul>
    );
    const guestLinks = (
      <ul className="navbar-nav ml-auto ">
        <li className="nav-item ">
          <Link className="nav-link text-light" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <div>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
          <Link to="/">
            <div className="navbar-brand">BirdWatcher.com</div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/my-page">
                  <div className="nav-link" href="#">
                    My page <span className="sr-only">(current)</span>
                  </div>
                </Link>
              </li>
              <Link to="/guide">
                <li className="nav-item">
                  <div className="nav-link" href="/landing">
                    Guide
                  </div>
                </li>
              </Link>
            </ul>

            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
