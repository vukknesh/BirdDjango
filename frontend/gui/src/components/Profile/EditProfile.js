import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateProfile } from "../../actions/profile";
import TextFieldGroup from "../common/TextFieldGroup";

class EditProfile extends Component {
  state = {
    youtube: "",
    facebook: "",
    wikiaves: "",
    instagram: "",
    personal_site: "",
    camera: "",
    lens: "",
    recorder: "",
    microphone: "",
    city: "",
    state: "",
    country: "",
    about_you: "",
    errors: {}
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    const {
      facebook,
      instagram,
      youtube,
      wikiaves,
      personal_site,
      camera,
      lens,
      recorder,
      microphone,
      city,
      state,
      country,
      about_you
    } = this.state;

    const newUser = {
      facebook,
      instagram,
      youtube,
      wikiaves,
      personal_site,
      camera,
      lens,
      recorder,
      microphone,
      city,
      state,
      country,
      about_you
    };
    let id = this.props.user.id;
    let token = this.props.token;
    this.props.updateProfile(newUser, id, token, this.props.history);
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
            <p className="lead text-center">Adress</p>
            <form noValidate onSubmit={this.onSubmit}>
              <TextFieldGroup
                placeholder="City"
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.onChange}
                // error={errors.email}
              />
              <TextFieldGroup
                placeholder="State"
                name="state"
                value={this.state.state}
                onChange={this.onChange}
                // error={errors.password}
                type="text"
              />
              <TextFieldGroup
                placeholder="Country"
                name="country"
                value={this.state.country}
                onChange={this.onChange}
                // error={errors.password2}
                type="text"
              />
              <p className="lead text-center">Your Equipment</p>
              <TextFieldGroup
                placeholder="camera"
                type="text"
                name="camera"
                value={this.state.camera}
                onChange={this.onChange}
                // error={errors.name}
              />
              <TextFieldGroup
                placeholder="lens"
                type="text"
                name="lens"
                value={this.state.lens}
                onChange={this.onChange}
                // error={errors.name}
              />
              <TextFieldGroup
                placeholder="recorder"
                type="text"
                name="recorder"
                value={this.state.recorder}
                onChange={this.onChange}
                // error={errors.name}
              />
              <TextFieldGroup
                placeholder="microphone"
                type="text"
                name="microphone"
                value={this.state.microphone}
                onChange={this.onChange}
                // error={errors.name}
              />

              <p className="lead text-center">Your Social Media</p>
              <TextFieldGroup
                placeholder="youtube"
                type="text"
                name="youtube"
                value={this.state.youtube}
                onChange={this.onChange}
                // error={errors.name}
              />

              <TextFieldGroup
                placeholder="facebook"
                type="text"
                name="facebook"
                value={this.state.facebook}
                onChange={this.onChange}
                // error={errors.name}
              />

              <TextFieldGroup
                placeholder="wikiaves"
                type="text"
                name="wikiaves"
                value={this.state.wikiaves}
                onChange={this.onChange}
                // error={errors.name}
              />

              <TextFieldGroup
                placeholder="instagram"
                type="text"
                name="instagram"
                value={this.state.instagram}
                onChange={this.onChange}
                // error={errors.name}
              />

              <TextFieldGroup
                placeholder="Personal Site"
                type="text"
                name="personal_site"
                value={this.state.personal_site}
                onChange={this.onChange}
                // error={errors.name}
              />
              <p className="lead text-center">About You</p>
              <TextFieldGroup
                placeholder="About you.."
                type="text"
                name="about_you"
                value={this.state.about_you}
                onChange={this.onChange}
                // error={errors.name}
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
    );
  }
}

const colorPrimary = {
  backgroundColor: "rgba(2, 206, 179, 0.7)",
  color: "white"
};

EditProfile.propTypes = {
  isAuthenticated: PropTypes.bool,
  updateProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  token: state.auth.token,
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { updateProfile }
)(withRouter(EditProfile));
