import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateProfile, getCurrentProfile } from "../../actions/profile";

import isEmpty from "../../validation/is-empty";

class EditProfile extends Component {
  state = {
    image: null,

    errors: {}
  };
  componentDidMount() {
    this.props.getCurrentProfile(this.props.user.id);
  }

  imageChange = event => {
    this.setState({ image: event.target.files[0].name });
  };
  onSubmit = event => {
    event.preventDefault();
    const { image } = this.state;

    const newUser = {
      image
    };
    let id = this.props.user.id;
    let token = this.props.token;
    this.props.updateProfile(newUser, id, token, this.props.history);
    console.log(newUser);
    console.log(this.state.image);
  };

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Profile</h1>
            <p className="lead text-center">Edit Your Bird Watcher Profile</p>
            <p className="lead text-center">Profile Picture</p>
            <form onSubmit={this.onSubmit}>
              <input type="file" name="image" onChange={this.imageChange} />

              <input
                type="submit"
                className="btn btn-block mt-4"
                style={colorPrimary}
              />
            </form>
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

EditProfile.propTypes = {
  isAuthenticated: PropTypes.bool,
  updateProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  token: state.auth.token,
  user: state.auth.user,
  profile: state.profiles.profile,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { updateProfile, getCurrentProfile }
)(withRouter(EditProfile));
