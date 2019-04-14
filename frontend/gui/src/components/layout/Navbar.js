import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import owl from "./owly.png";

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
      var first_name = this.props.myprofile.first_name;
      var last_name = this.props.myprofile.last_name;
      var email = this.props.myprofile.email;
      var is_owner = this.props.myprofile.is_owner;
    }

    const authLinks = (
      <ul className="navbar-nav ml-auto font-weight-bold show1 mr-5">
        <li className="nav-item dropdown">
          <Link className="nav-link text-light" to="/add-product">
            Produtos
          </Link>
          <div className="dropdown-content">
            <Link to="/marketplace">Procurar</Link>
            {is_owner ? <Link to="/">Registrar Produto</Link> : null}
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link text-light" to="/hotels">
            Hoteis
          </Link>
          <div className="dropdown-content">
            <Link to="/hotels">Procurar</Link>
            {is_owner ? <Link to="/add-hotel">Registrar Hotel</Link> : null}
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link text-light" to="/guide">
            Guias
          </Link>
          <div className="dropdown-content">
            <Link to="/guide">Procurar Guias</Link>
            <Link to="/">Cadastrar</Link>
          </div>
        </li>
        <li className="nav-item active show1 dropdown">
          <Link className="nav-link text-light" to="/my-page">
            Perfil{" "}
            <img
              src={image}
              alt=""
              style={{ width: "30px", height: "30px" }}
              className="rounded-circle"
            />
          </Link>
          <div className="dropdown-content">
            <div className="perfil-dropdown">
              <div>
                <img src={image} alt="" />
              </div>
              <div>
                <h4>
                  {first_name} {last_name}
                </h4>
                <p>{email}</p>
              </div>
            </div>
            <Link to="/my-page">Meu Perfil</Link>
            <a href="#">Link 2</a>
            <a href="/" onClick={this.handleLogout}>
              SAIR/LOGOUT
            </a>
          </div>
        </li>
      </ul>
    );
    const guestLinks = (
      <ul className="mr-5 navbar-nav ml-auto font-weight-bold show1">
        <li className="nav-item">
          <Link className="nav-link text-light" to="/register">
            Cadastrar
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
              <img className="owlimage" alt="" src={owl} />
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
