import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateProfile, getCurrentProfile } from "../../actions/profile";
import TextFieldGroup from "../common/TextFieldGroup";

import isEmpty from "../../validation/is-empty";

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
    // gender: "",

    is_guide: false,
    is_owner: false,
    errors: {}
  };
  componentDidMount() {
    this.props.getCurrentProfile(this.props.user.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile) {
      const profile = nextProps.profile;

      profile.youtube = !isEmpty(profile.youtube) ? profile.youtube : "";
      profile.is_guide = !isEmpty(profile.is_guide) ? profile.is_guide : false;
      profile.is_owner = !isEmpty(profile.is_owner) ? profile.is_owner : false;

      profile.instagram = !isEmpty(profile.instagram) ? profile.instagram : "";
      profile.facebook = !isEmpty(profile.facebook) ? profile.facebook : "";
      profile.wikiaves = !isEmpty(profile.wikiaves) ? profile.wikiaves : "";
      profile.personal_site = !isEmpty(profile.personal_site)
        ? profile.personal_site
        : "";
      profile.camera = !isEmpty(profile.camera) ? profile.camera : "";
      profile.lens = !isEmpty(profile.lens) ? profile.lens : "";
      profile.recorder = !isEmpty(profile.recorder) ? profile.recorder : "";
      profile.microphone = !isEmpty(profile.microphone)
        ? profile.microphone
        : "";
      profile.city = !isEmpty(profile.city) ? profile.city : "";
      profile.state = !isEmpty(profile.state) ? profile.state : "";
      profile.country = !isEmpty(profile.country) ? profile.country : "";
      profile.about_you = !isEmpty(profile.about_you) ? profile.about_you : "";
      // profile.gender = !isEmpty(profile.gender) ? profile.gender : "";

      this.setState({
        youtube: profile.youtube,
        image: profile.image,
        instagram: profile.instagram,
        facebook: profile.facebook,
        wikiaves: profile.wikiaves,
        personal_site: profile.personal_site,
        camera: profile.camera,
        lens: profile.lens,
        recorder: profile.recorder,
        microphone: profile.microphone,
        city: profile.city,
        state: profile.state,
        country: profile.country,
        about_you: profile.about_you,
        is_guide: profile.is_guide,
        is_owner: profile.is_owner
        // gender: profile.gender
      });
    }
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleCheckboxGuide = event => {
    this.setState(prevState => ({
      is_guide: !prevState.is_guide
    }));
    console.log(this.state.is_guide);
  };
  handleCheckboxOwner = event => {
    this.setState(prevState => ({
      is_owner: !prevState.is_owner
    }));
    console.log(this.state.is_owner);
  };

  onSubmit = event => {
    event.preventDefault();
    const {
      facebook,
      is_guide,
      is_owner,
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
      // gender
    } = this.state;

    const newUser = {
      facebook,
      is_guide,
      is_owner,
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
      // gender
    };
    let id = this.props.user.id;
    let token = this.props.token;
    this.props.updateProfile(newUser, id, token, this.props.history);
  };

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    if (this.state.is_guide) {
      var is_guide = this.state.is_guide;
    }
    if (this.state.is_owner) {
      var is_owner = this.state.is_owner;
    }
    console.log(is_guide + "guide ... " + is_owner + "owner");

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Profile</h1>
            <p className="lead text-center">Edit Your Bird Watcher Profile</p>
            <p className="lead text-center">Status</p>
            {is_guide ? (
              <input
                type="checkbox"
                name="is_guide"
                checked={this.state.is_guide}
                value={this.state.is_guide}
                onChange={this.handleCheckboxGuide}
              />
            ) : (
              <input
                type="checkbox"
                name="is_guide"
                value={this.state.is_guide}
                onChange={this.handleCheckboxGuide}
              />
            )}{" "}
            - Guia <span className="mr-4" />
            {is_owner ? (
              <input
                type="checkbox"
                name="is_owner"
                checked={this.state.is_owner}
                value={this.state.is_owner}
                onChange={this.handleCheckboxOwner}
              />
            ) : (
              <input
                type="checkbox"
                name="is_owner"
                value={this.state.is_owner}
                onChange={this.handleCheckboxOwner}
              />
            )}{" "}
            - Acomodações
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
              {/* <SelectListGroup
                placeholder="gender"
                name="gender"
                value={this.state.gender}
                onChange={this.onChange}
                // error={errors.status}
                options={options}
                info="Give an ideia where you are at on your carrer"
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
