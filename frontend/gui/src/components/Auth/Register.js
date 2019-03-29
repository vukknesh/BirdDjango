import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";

class Register extends Component {
  state = {
    email: "",
    password: "",
    password2: "",
    username: "",
    first_name: "",
    last_name: "",
    active: false,

    errors: {}
  };

  componentDidMount() {}

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    const { username, password, password2, first_name, last_name } = this.state;

    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: "Passwords do not match" });
    } else {
      let email = username;
      const newUser = {
        email,
        password,
        username,
        first_name,
        last_name
      };
      this.props.register(newUser);
    }
  };
  handleOnFocus = e => {
    this.setState({
      active: true
    });
  };
  handleFalse = e => {
    this.setState({
      active: false
    });
  };
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className={this.state.active ? "container1 password" : "container1"}>
        <div className={this.state.active ? "owl password" : "owl"}>
          <div className={this.state.active ? "hand password" : "hand"} />
          <div
            className={
              this.state.active ? "hand hand-r password" : "hand hand-r"
            }
          />
          <div className={this.state.active ? "arms password" : "arms"}>
            <div className={this.state.active ? "arm password" : "arm"} />
            <div
              className={this.state.active ? "arm arm-r password" : "arm arm-r"}
            />
          </div>
        </div>
        <div className={this.state.active ? "form password" : "form"}>
          <div className={this.state.active ? "control password" : "control"}>
            <label
              htmlFor="email"
              className={
                this.state.active ? "fa fa-envelope password" : "fa fa-envelope"
              }
            />
            <input
              id="email"
              onFocus={this.handleFalse}
              placeholder="Email"
              type="email"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
              className={this.state.active ? "password" : ""}
            />
          </div>
          <div className={this.state.active ? "control password" : "control"}>
            <label
              htmlFor="password"
              className={
                this.state.active
                  ? "fas fa-signature password"
                  : "fas fa-signature"
              }
            />
            <input
              onFocus={this.handleFalse}
              id="password"
              placeholder="Nome"
              type="text"
              name="first_name"
              value={this.state.first_name}
              onChange={this.onChange}
              className={this.state.active ? "password" : ""}
            />
          </div>
          <div className={this.state.active ? "control password" : "control"}>
            <label
              htmlFor="password"
              className={
                this.state.active
                  ? "fas fa-signature password"
                  : "fas fa-signature"
              }
            />
            <input
              onFocus={this.handleFalse}
              id="password"
              placeholder="Sobrenome"
              type="text"
              name="last_name"
              value={this.state.last_name}
              onChange={this.onChange}
              className={this.state.active ? "password" : ""}
            />
          </div>
          <div className={this.state.active ? "control password" : "control"}>
            <label
              htmlFor="password"
              className={
                this.state.active ? "fa fa-asterisk password" : "fa fa-asterisk"
              }
            />
            <input
              onFocus={this.handleOnFocus}
              id="password"
              placeholder="Senha"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              className={this.state.active ? "password" : ""}
            />
          </div>
          <div className={this.state.active ? "control password" : "control"}>
            <label
              htmlFor="email"
              className={
                this.state.active ? "fa fa-asterisk password" : "fa fa-asterisk"
              }
            />
            <input
              id="password"
              onFocus={this.handleOnFocus}
              placeholder="Confirma sua senha"
              type="password"
              name="password2"
              value={this.state.password2}
              onChange={this.onChange}
              className={this.state.active ? "password" : ""}
            />

            <button onClick={this.onSubmit} className="welcomebtn">
              Entrar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  createMessage: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {
    register,
    createMessage
  }
)(Register);
