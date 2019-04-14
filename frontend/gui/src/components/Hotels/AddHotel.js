import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { addHotel } from "../../actions/hotels";
import TextFieldGroup from "../common/TextFieldGroup";
// import { GoogleComponent } from "react-google-location";
import isEmpty from "../../validation/is-empty";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
// const API_KEY = "AIzaSyDvXcLdeULIN8d49xRl08EHVcHGgPS9Cu0";

class AddHotel extends Component {
  state = {
    title: "",
    price: "",
    address: "",
    city: "",
    state: "",
    content: "",
    lat: null,
    lng: null,

    // place: null,
    errors: {}
  };
  componentDidMount() {
    this.props.getCurrentProfile(this.props.user.id);
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng =>
        this.setState({
          lat: latLng.lat,
          lng: latLng.lng
        })
      )
      .catch(error => console.error("Error", error));
  };
  // console.log("Success", latLng))
  componentWillReceiveProps(nextProps) {
    if (nextProps.hotel) {
      const hotel = nextProps.hotel;

      hotel.title = !isEmpty(hotel.title) ? hotel.title : "";
      hotel.price = !isEmpty(hotel.price) ? hotel.price : "";
      hotel.address = !isEmpty(hotel.address) ? hotel.address : "";

      hotel.city = !isEmpty(hotel.city) ? hotel.city : "";
      hotel.state = !isEmpty(hotel.state) ? hotel.state : "";
      hotel.content = !isEmpty(hotel.content) ? hotel.content : "";

      this.setState({
        title: hotel.title,
        price: hotel.price,
        address: hotel.address,
        city: hotel.city,
        state: hotel.state,
        content: hotel.content
      });
    }
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    const {
      title,
      price,
      address,
      city,
      state,
      content,
      lat,
      lng
    } = this.state;

    const newHotel = {
      lat,
      lng,
      title,
      price,
      address,
      city,
      state,
      content
    };
    console.log(newHotel);
    let token = this.props.token;

    this.props.addHotel(newHotel, token, this.props.history);
  };

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    console.log(this.state.address);
    console.warn("lat" + this.state.lat);
    console.warn(this.state.lng);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Hotel</h1>
            <p className="lead text-center">Registre sua acomodação</p>
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
                      placeholder: "Search Places ...",
                      className: "location-search-input"
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
            {/* <GoogleComponent
              apiKey={API_KEY}
              language={"en"}
              country={"country:us"}
              coordinates={true}
              // locationBoxStyle={"custom-style"}
              // locationListStyle={"custom-style-list"}
              onChange={e => {
                this.setState({ place: e });
              }}
            /> */}
            <p className="lead text-center">Titulo</p>
            <form noValidate onSubmit={this.onSubmit}>
              <TextFieldGroup
                placeholder="Titulo"
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
                // error={errors.email}
              />
              <TextFieldGroup
                placeholder="Sobre seu lugar..."
                name="content"
                value={this.state.content}
                onChange={this.onChange}
                // error={errors.password}
                type="text"
              />

              <p className="lead text-center">Endereço</p>
              <TextFieldGroup
                placeholder="Endereço"
                type="text"
                name="address"
                value={this.state.address}
                onChange={this.onChange}
                // error={errors.name}
              />
              <TextFieldGroup
                placeholder="Cidade"
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.onChange}
                // error={errors.name}
              />
              <TextFieldGroup
                placeholder="Estado"
                type="text"
                name="state"
                value={this.state.state}
                onChange={this.onChange}
                // error={errors.name}
              />
              <TextFieldGroup
                placeholder="Preço"
                type="text"
                name="price"
                value={this.state.price}
                onChange={this.onChange}
                // error={errors.name}
              />

              <input type="submit" className="edit-btn" />
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

AddHotel.propTypes = {
  isAuthenticated: PropTypes.bool,

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
  { addHotel, getCurrentProfile }
)(withRouter(AddHotel));
