import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

import "./Navbarcss.css";

class Navbar extends Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
    this.props.history.push("/");
  };
  render() {
    const { isAuthenticated } = this.props;
    if (this.props.myprofile) {
      var image = this.props.myprofile.image;
      var is_owner = this.props.myprofile.is_owner;
    }

    const authLinks = (
      <ul className="navbar-nav ml-auto font-weight-bold show1 mr-5">
        {is_owner ? (
          <li className="nav-item">
            <Link className="nav-link text-light" to="/add-hotel">
              Register Hotel
            </Link>
          </li>
        ) : null}
        <li className="nav-item active show1">
          <Link className="nav-link text-light" to="/my-page">
            My page <span className="sr-only">(current)</span>
          </Link>
        </li>

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
              src={image}
              alt=".."
              style={{ width: "30px", height: "30px", marginRight: "15px" }}
              className="rounded-circle"
            />
            LOGOUT
          </a>
        </li>
      </ul>
    );
    const guestLinks = (
      <ul className="mr-5 navbar-nav ml-auto font-weight-bold show1">
        <li className="nav-item">
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
        <nav
          className="pl-5 pr-5 navbar navbar-expand-lg navbar-dark navz"
          style={navBg}
        >
          <Link to="/">
            <div className="navbar-brand font-weight-bold ml-5">
              Murucututu.com.br
            </div>
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
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </nav>
      </div>
    );
  }
}

const navBg = {
  background: "rgba(71, 45, 32, 0.82)"
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  myprofile: state.profiles.myprofile
});
export default connect(
  mapStateToProps,
  { logout }
)(withRouter(Navbar));
