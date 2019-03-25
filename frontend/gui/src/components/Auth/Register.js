import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/auth";
import { createMessage } from "../../actions/messages";

import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
  state = {
    email: "",
    password: "",
    password2: "",
    name: "",
    errors: {}
  };

  componentDidMount() {}

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    const { name, email, password, password2 } = this.state;

    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: "Passwords do not match" });
    } else {
      const newUser = {
        email,
        password,
        name
      };
      this.props.registerUser(newUser);
    }
  };
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create your BirdWatcher account
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="name"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  // error={errors.name}
                />
                <TextFieldGroup
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  // error={errors.email}
                />
                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  // error={errors.password}
                  type="password"
                />
                <TextFieldGroup
                  placeholder="Confirm password"
                  name="password2"
                  value={this.state.password2}
                  onChange={this.onChange}
                  // error={errors.password2}
                  type="password"
                />

                <input
                  type="submit"
                  className="btn btn-block mt-4"
                  style={colorPrimary}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const colorPrimary = {
  backgroundColor: "rgba(2, 206, 179, 0.7)",
  color: "white"
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  createMessage: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {
    registerUser,
    createMessage
  }
)(Register);
