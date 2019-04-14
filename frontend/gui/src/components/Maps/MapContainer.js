import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import CurrentLocation from "./Map";
import { GOOGLE_API_KEY } from "../../utils/env";
const mapStyles = {
  maxWidth: "100%",
  maxHeight: "100%"
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
  };
  onMouseoverMarker(props, marker, e) {
    console.log("over");
    alert("CUIDADO");
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
    // let markers;
    // if(this.props.hotels){
    //   markers = this.props.hotels.position.map(hotel => (
    //     <Marker>
    //   ))
    // }
    return (
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        <Marker
          onMouseover={this.onMouseoverMarker}
          onClick={this.onMarkerClick}
          name={"current location"}
        />

        <Marker
          onClick={this.onMarkerClick}
          onMouseover={this.onMouseoverMarker}
          title={"The marker`s title will appear as a tooltip."}
          name={"SOMA"}
          position={{ lat: 37.778519, lng: -122.40564 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          onMouseover={this.onMouseoverMarker}
          title={"The marker`s title will appear as a tooltip."}
          name={"SOMA"}
          position={{ lat: -15.7379344, lng: -47.86702120000001 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          onMouseover={this.onMouseoverMarker}
          title={"The marker`s title will appear as a tooltip."}
          name={"Casa da vovo"}
          position={{ lat: -22.8571311, lng: -47.0340183 }}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY
})(MapContainer);
