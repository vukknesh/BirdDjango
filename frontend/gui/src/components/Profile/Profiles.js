import React, { Component } from "react";
import { connect } from "react-redux";
import Youtube from "../youtube/Youtube";
import PersonalProfile from "./PersonalProfile";
import ContactProfile from "./ContactProfile";
import Map from "../Maps/Map";
import {
  getProfileByHandle,
  clearCurrentProfile,
  getCurrentProfile
} from "../../actions/profile";

class Profiles extends Component {
  componentWillMount() {
    if (this.props.match.params.id) {
      this.props.getCurrentProfile(this.props.match.params.id);
    }
  }

  render() {
    return (
      <div style={pageStyle} className="mt-3  bg-light">
        <div className="row h-100 ">
          <div className="w-25 d-flex justify-content-center">
            <PersonalProfile />
          </div>
          <div className="w-50 d-flex justify-content-center border rouded">
            <h1>middle</h1>
          </div>
          <div className="w-25 justify-content-center border rounded bg-light">
            <ContactProfile />
          </div>
        </div>
        <div>
          <Youtube />
        </div>
        <div className="google">
          <Map
            google={this.props.google}
            center={{ lat: 18.5204, lng: 73.8567 }}
            height="300px"
            zoom={15}
          />
        </div>
      </div>
    );
  }
}

const pageStyle = {
  height: "100%",
  width: "100%"
};
const mapStateToProps = state => ({
  profile: state.profiles.profile
});
export default connect(
  mapStateToProps,
  { getProfileByHandle, clearCurrentProfile, getCurrentProfile }
)(Profiles);
