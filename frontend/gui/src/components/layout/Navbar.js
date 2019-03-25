import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import profilepic from "../MyPage/profile1.jpg";
import "./Navbarcss.css";

class Navbar extends Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
    this.props.history.push("/");
  };
  render() {
    const { isAuthenticated } = this.props;

    const mypage = (
      <li className="nav-item active">
        <Link className="nav-link text-light" to="/my-page">
          My page <span className="sr-only">(current)</span>
        </Link>
      </li>
    );
    const guest = (
      <li className="nav-item active">
        <Link className="nav-link text-light" to="/about-us">
          About <span className="sr-only">(current)</span>
        </Link>
      </li>
    );

    const authLinks = (
      <ul className="navbar-nav ml-auto font-weight-bold">
        <li className="nav-item">
          <Link className="nav-link text-light" to="/hotels">
            Hotels
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/guide">
            Guides
          </Link>
        </li>
        <li className="nav-item ">
          <a
            href="/"
            onClick={this.handleLogout}
            className="nav-link text-light"
          >
            <img
              src={profilepic}
              alt=".."
              style={{ width: "25px", marginRight: "15px" }}
              className="rounded-circle"
            />
            LOGOUT
          </a>
        </li>
      </ul>
    );
    const guestLinks = (
      <ul className="navbar-nav ml-auto font-weight-bold ">
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
        <nav className="navbar navbar-expand-lg navbar-dark navz" style={navBg}>
          <Link to="/">
            <div className="navbar-brand font-weight-bold">BirdWatcher.com</div>
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
            <ul className="navbar-nav mr-auto font-weight-bold">
              {isAuthenticated ? mypage : guest}

              <li className="nav-item">
                <Link className="nav-link text-light" to="/guide">
                  Guide
                </Link>
              </li>
            </ul>

            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </nav>
      </div>
    );
  }
}

const navBg = {
  backgroundColor: "rgba(2, 206, 179, 0.7)"
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { logout }
)(withRouter(Navbar));
