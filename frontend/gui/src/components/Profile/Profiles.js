import React, { Component } from "react";
import { connect } from "react-redux";
import YouEnter from "../youtube/YouEnter";
import PersonalProfile from "./PersonalProfile";
import {
  getProfileByHandle,
  clearCurrentProfile,
  getCurrentProfile
} from "../../actions/profile";

class Profiles extends Component {
  componentWillMount() {
    if (this.props.match.params.id) {
      // this.props.getProfileByHandle(this.props.match.params.id);
      this.props.getCurrentProfile(this.props.match.params.id);
    }
  }

  render() {
    // console.log(this.state.profile);
    // let content;
    // if (this.props.profile) {
    //   content = <div>{this.props.profile.username}</div>;
    // }

    return (
      <div style={pageStyle} className="mt-3  bg-light">
        <div className="row h-100 ">
          <div className="w-25 d-flex justify-content-center">
            <PersonalProfile />
          </div>
          <div className="w-50 d-flex justify-content-center border border-primary">
            <h1>middle</h1>
          </div>
          <div className="w-25 justify-content-center">
            <h1>Contact Me</h1>
          </div>
        </div>
        <div>
          <YouEnter />
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
