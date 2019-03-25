import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { Redirect } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",

      errors: {}
    };
  }
  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();

    this.props.login(this.state.username, this.state.password);
  };
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8  m-auto  ">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your BirdWatcher account
              </p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="username"
                  name="username"
                  type="text"
                  value={this.state.username}
                  onChange={this.onChange}
                  // error={errors.email}
                />
                <TextFieldGroup
                  placeholder="password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  // error={errors.password}
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
