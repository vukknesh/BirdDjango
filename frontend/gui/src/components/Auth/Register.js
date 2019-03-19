import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/auth";

import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password1: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {}

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();

    let username = this.state.username;
    let email = this.state.email;
    let password1 = this.state.password1;

    this.props.registerUser(username, email, password1);
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
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
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
                  name="password1"
                  value={this.state.password1}
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
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {
    registerUser
  }
)(Register);
