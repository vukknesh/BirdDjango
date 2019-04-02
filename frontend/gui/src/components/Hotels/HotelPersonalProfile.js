import React, { Component } from "react";
import HotelProfile from "./HotelProfile";
import { connect } from "react-redux";

import { getHotel } from "../../actions/hotels";

class HotelPersonalProfile extends Component {
  state = {
    hotel: null
  };
  componentWillMount() {
    if (this.props.match.params.id) {
      // this.props.getProfileByHandle(this.props.match.params.id);
      this.props.getHotel(this.props.match.params.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hotel === null) {
      this.props.history.push("/not-found");
      this.setState({
        hotel: this.props.hotel
      });
    }
  }
  render() {
    return (
      <div>
        <HotelProfile />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  hotel: state.hotels.hotel,
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { getHotel }
)(HotelPersonalProfile);
