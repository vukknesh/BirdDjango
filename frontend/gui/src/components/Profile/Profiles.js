import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Youtube from "../youtube/Youtube";
import PersonalProfile from "./PersonalProfile";
import ContactProfile from "./ContactProfile";

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
    if (!this.props.profile) {
      return <Redirect to="/login" />;
    }
    return (
      <div style={pageStyle} className="mt-3  bg-light">
        <div className="row h-100 ">
          <div className="w-25 d-flex justify-content-center">
            <PersonalProfile />
          </div>
          <div className="w-50 d-flex justify-content-center border rouded" />
          <div className="w-25 justify-content-center border rounded bg-light">
            <ContactProfile />
          </div>
        </div>
        <div>
          <Youtube />
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
