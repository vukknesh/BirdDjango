import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { Redirect } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      active: false,
      errors: {}
    };
  }

  handleOnFocus = e => {
    this.setState({
      active: !this.state.active
    });
  };
  handleFalse = e => {
    this.setState({
      active: false
    });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();

    this.props.login(this.state.username, this.state.password);
  };
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/my-page" />;
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
                this.state.active ? "fa fa-asterisk password" : "fa fa-asterisk"
              }
            />
            <input
              onFocus={this.handleOnFocus}
              id="password"
              placeholder="Password"
              type="password"
              name="password"
              value={this.state.password}
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

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {
    login
  }
)(Login);
