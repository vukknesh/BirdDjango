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
      var id = this.props.myprofile.id;
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
          <div className="dropdown-content-produtos">
            <Link to="/marketplace">
              {" "}
              <p>Procurar</p>
            </Link>
            {is_owner ? (
              <Link to="/">
                <p>Registrar Produto</p>
              </Link>
            ) : null}
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link text-light" to="/hotels">
            <p>Hoteis</p>
          </Link>
          <div className="dropdown-content-hoteis">
            <Link to="/hotels">
              <p>Procurar</p>
            </Link>
            {is_owner ? <Link to="/add-hotel">Registrar Hotel</Link> : null}
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link text-light" to="/guide">
            Guias
          </Link>
          <div className="dropdown-content-guias">
            <Link to="/guide">
              <p>Procurar Guias</p>{" "}
            </Link>
            <Link to="/">
              <p>Cadastrar</p>
            </Link>
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
          <div className="dropdown-content-perfil">
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
              {is_owner ? (
                <Link to="/my-accomodations" className="link-to">
                  <p>
                    <i className="fas fa-home" /> {"  "} Minhas Acomodações
                  </p>
                </Link>
              ) : null}
              {is_owner ? (
                <Link to="/my-products" className="link-to">
                  <p>
                    <i className="fas fa-box-open" /> {"  "} Meus Produtos
                  </p>
                </Link>
              ) : null}

              <Link to="/my-comments" className="link-to">
                <p>
                  <i className="far fa-comments" /> {"  "}Meus Comentarios
                </p>
              </Link>

              <Link to="/my-messages" className="link-to">
                <p>
                  <i className="far fa-envelope" /> {"  "} Meus Posts
                </p>
              </Link>

              <Link to="/edit-profile" className="link-to">
                <p>
                  <i className="far fa-address-card" /> {"  "}
                  Editar Perfil
                </p>
              </Link>

              <Link to="/edit-profile-pic" className="link-to">
                <p>
                  <i className="fas fa-camera-retro" /> {"  "}Editar Foto
                </p>
              </Link>

              <Link className="link-to" to={`/profilebyhandle/${id}/`}>
                <p>Meu Perfil</p>
              </Link>

              <a className="link-to" href="/" onClick={this.handleLogout}>
                <p>LOGOUT</p>
              </a>
            </div>
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
