import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateProfile, getCurrentProfile } from "../../actions/profile";
import TextFieldGroup from "../common/TextFieldGroup";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
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
    address: "",
    city: "",
    state: "",
    country: "",
    about_you: "",
    lat: null,
    lng: null,

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
      profile.address = !isEmpty(profile.address) ? profile.address : "";
      profile.city = !isEmpty(profile.city) ? profile.city : "";
      profile.state = !isEmpty(profile.state) ? profile.state : "";
      profile.country = !isEmpty(profile.country) ? profile.country : "";
      profile.about_you = !isEmpty(profile.about_you) ? profile.about_you : "";

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
        is_owner: profile.is_owner,
        address: profile.address
        // gender: profile.gender
      });
    }
  }
  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        console.log(results[0]);
        this.setState({
          address: results[0].address_components[0].short_name
        });
        getLatLng(results[0]).then(latLng =>
          this.setState({
            lat: latLng.lat,
            lng: latLng.lng
          })
        );
      })
      .catch(error => console.error("Error", error));
  };
  handleChangeCity = city => {
    this.setState({ city });
  };

  handleSelectCity = city => {
    geocodeByAddress(city)
      .then(results => {
        console.log(results[0]);
        this.setState({
          city: results[0].address_components[0].short_name,
          state: results[0].address_components[1].short_name,
          country: results[0].address_components[2].short_name
        });
      })
      .catch(error => console.error("Error", error));
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleCheckboxGuide = event => {
    this.setState(prevState => ({
      is_guide: !prevState.is_guide
    }));
  };
  handleCheckboxOwner = event => {
    this.setState(prevState => ({
      is_owner: !prevState.is_owner
    }));
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
      about_you,
      lat,
      lng,
      address
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
      about_you,
      lat,
      lng,
      address
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

    return (
      <div className="container pb-5">
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
            <PlacesAutocomplete
              value={this.state.address}
              onChange={this.handleChange}
              onSelect={this.handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading
              }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: "Endereço",
                      className: "form-control form-control-lg mb-2"
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: "#fafafa", cursor: "pointer" }
                        : { backgroundColor: "#ffffff", cursor: "pointer" };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
            <form noValidate onSubmit={this.onSubmit}>
              <PlacesAutocomplete
                value={this.state.city}
                onChange={this.handleChangeCity}
                onSelect={this.handleSelectCity}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading
                }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: "Cidade",
                        className: "form-control form-control-lg mb-2"
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map(suggestion => {
                        const className = suggestion.active
                          ? "suggestion-item--active"
                          : "suggestion-item";
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: "#fafafa", cursor: "pointer" }
                          : { backgroundColor: "#ffffff", cursor: "pointer" };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
              <TextFieldGroup
                placeholder="State"
                name="state"
                value={this.state.state}
                onChange={this.onChange}
                type="text"
                disabled
              />
              <TextFieldGroup
                placeholder="Country"
                name="country"
                value={this.state.country}
                onChange={this.onChange}
                type="text"
                disabled
              />
              <p className="lead text-center">Your Equipment</p>
              <TextFieldGroup
                placeholder="camera"
                type="text"
                name="camera"
                value={this.state.camera}
                onChange={this.onChange}
              />
              <TextFieldGroup
                placeholder="lens"
                type="text"
                name="lens"
                value={this.state.lens}
                onChange={this.onChange}
              />
              <TextFieldGroup
                placeholder="recorder"
                type="text"
                name="recorder"
                value={this.state.recorder}
                onChange={this.onChange}
              />
              <TextFieldGroup
                placeholder="microphone"
                type="text"
                name="microphone"
                value={this.state.microphone}
                onChange={this.onChange}
              />
              <p className="lead text-center">Your Social Media</p>
              <TextFieldGroup
                placeholder="youtube"
                type="text"
                name="youtube"
                value={this.state.youtube}
                onChange={this.onChange}
              />
              <TextFieldGroup
                placeholder="facebook"
                type="text"
                name="facebook"
                value={this.state.facebook}
                onChange={this.onChange}
              />
              <TextFieldGroup
                placeholder="wikiaves"
                type="text"
                name="wikiaves"
                value={this.state.wikiaves}
                onChange={this.onChange}
              />
              <TextFieldGroup
                placeholder="instagram"
                type="text"
                name="instagram"
                value={this.state.instagram}
                onChange={this.onChange}
              />
              <TextFieldGroup
                placeholder="Personal Site"
                type="text"
                name="personal_site"
                value={this.state.personal_site}
                onChange={this.onChange}
              />
              <p className="lead text-center">About You</p>
              <TextFieldGroup
                placeholder="About you.."
                type="text"
                name="about_you"
                value={this.state.about_you}
                onChange={this.onChange}
              />

              <input type="submit" className="btn btn-block btn-info" />
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
