import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import CurrentLocation from "./Map";
import { GOOGLE_API_KEY } from "../../utils/env";
import "../Hotels/main.css";

class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    active: false
  };

  // componentDidMount() {
  //   this.props.getHotels();
  // }
  onMouseoverMarker(props, marker, e) {
    // this.setState({ active: true });
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  fetchPlaces(mapProps, map) {
    const { google } = mapProps;
    const service = new google.maps.places.PlacesService(map);
    // ...
  }
  render() {
    let markers;
    let markerProfile;
    if (this.props.hotels) {
      markers = this.props.hotels.map(hotel => (
        <Marker
          onClick={this.onMarkerClick}
          onMouseover={this.onMouseoverMarker}
          title={hotel.title}
          price={hotel.price}
          name={(hotel.price, hotel.title)}
          img={hotel.image1}
          position={{ lat: `${hotel.lat}`, lng: `${hotel.lng}` }}
          id={hotel.id}
          key={hotel.id}
        />
      ));
    }
    if (this.props.profiles) {
      markerProfile = this.props.profiles.map(profile => (
        <Marker
          onClick={this.onMarkerClick}
          onMouseover={this.onMouseoverMarker}
          title={profile.first_name}
          name={profile.last_name}
          img={profile.image}
          position={{ lat: `${profile.lat}`, lng: `${profile.lng}` }}
          id={profile.id}
          key={profile.id}
        />
      ));
    }
    return (
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        <Marker
          // onMouseover={this.onMouseoverMarker}
          onClick={this.onMarkerClick}
          name={"current location"}
        />
        {markers}
        {markerProfile}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div className="info-maps-window">
            <h4>{this.state.selectedPlace.title}</h4>
            <p>{this.state.selectedPlace.name}</p>
            {this.state.selectedPlace.price ? (
              <small>R$: {this.state.selectedPlace.price}</small>
            ) : null}
            <img src={this.state.selectedPlace.img} alt="" />
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY
})(MapContainer);
