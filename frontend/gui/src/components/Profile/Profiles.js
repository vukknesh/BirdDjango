import React, { Component } from "react";
import { connect } from "react-redux";

import PersonalProfile from "./PersonalProfile";

import {
  getProfileByHandle,
  clearCurrentProfile,
  getCurrentProfile
} from "../../actions/profile";

class Profiles extends Component {
  state = {
    profile: null
  };
  componentWillMount() {
    if (this.props.match.params.id) {
      // this.props.getProfileByHandle(this.props.match.params.id);
      this.props.getCurrentProfile(this.props.match.params.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null) {
      this.props.history.push("/not-found");
      this.setState({
        profile: this.props.profiles.profile
      });
    }
  }
  // componentWillUnmount() {
  //   this.props.clearCurrentProfile();
  // }
  render() {
    console.log(this.state.profile);
    let content;
    if (this.props.profile) {
      content = <div>{this.props.profile.username}</div>;
    }

    return (
      <div style={pageStyle} className="mt-3  bg-light">
        <div className="row h-100 ">
          <div className="w-25 d-flex justify-content-center">
            <PersonalProfile />
          </div>
          <div className="w-50 d-flex justify-content-center ">
            <h2>Meio</h2>
          </div>
          <div className="w-25">
            <h1>Hello</h1>
          </div>
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
