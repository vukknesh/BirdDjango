import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateProfile, getCurrentProfile } from "../../actions/profile";
import { ImmutableLoadingBar as LoadingBar } from "react-redux-loading-bar";
import isEmpty from "../../validation/is-empty";

class EditProfile extends Component {
  state = {
    image: null,
    is_guide: false,
    is_owner: false,
    errors: {},
    styles: {}
  };

  componentDidMount() {
    this.props.getCurrentProfile(this.props.user.id);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.profile) {
      const profile = nextProps.profile;
      profile.image = !isEmpty(profile.image) ? profile.image : false;
      profile.is_guide = true ? true : false;
      profile.is_owner = true ? true : false;

      this.setState({
        is_guide: profile.is_guide,
        is_owner: profile.is_owner,
        image: profile.image
      });
    }
  }

  imageChange = event => {
    this.setState({ image: event.target.files[0] });
  };
  onSubmit = event => {
    event.preventDefault();

    const fd = new FormData();
    if (this.state.image !== null) {
      fd.append("image", this.state.image, this.state.image.name);
    }

    fd.append("is_owner", this.state.is_owner);
    fd.append("is_guide", this.state.is_guide);

    let id = this.props.user.id;
    let token = this.props.token;

    this.props.updateProfile(fd, id, token, this.props.history);

    this.myFunction();
  };
  myFunction = () => {
    for (var i = 0; i < 100; i += 1) {
      this.setState({
        styles: {
          width: `${i}%`
        }
      });
    }
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
              {/* <input
                type="checkbox"
                name="is_guide"
                checked={this.state.is_guide}
                onChange={this.handleCheckboxGuide}
              />{" "}
              - Guia <span className="mr-4" />
              <input
                type="checkbox"
                name="is_owner"
                checked={this.state.is_owner}
                onChange={this.handleCheckboxOwner}
              /> */}
              <input type="submit" className="edit-btn" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

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
