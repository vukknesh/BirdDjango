import React, { Component } from "react";
import { connect } from "react-redux";

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
      <div>
        <h1>Hl</h1>
        <h1>{content}</h1>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profiles.profile
});
export default connect(
  mapStateToProps,
  { getProfileByHandle, clearCurrentProfile, getCurrentProfile }
)(Profiles);
