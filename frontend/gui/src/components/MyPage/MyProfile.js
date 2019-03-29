import React, { Component } from "react";
import { getCurrentProfile } from "../../actions/profile";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import profilepic from "./profile1.jpg";
import isEmpty from "../../validation/is-empty";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      profile: null
    };
  }
  componentDidMount() {
    this.props.getCurrentProfile(this.props.user.id);
  }

  render() {
    if (this.props.profile) {
      var first_name = this.props.profile.first_name;
      var last_name = this.props.profile.last_name;
      var email = this.props.profile.email;
      var city = this.props.profile.city;
      var facebook = this.props.profile.facebook;
      var instagram = this.props.profile.instagram;
      var youtube = this.props.profile.youtube;
      var wikiaves = this.props.profile.wikiaves;
    }

    return (
      <div>
        <div className="card s-top">
          <img
            style={{ width: "100px", height: "100px", marginRight: "250px" }}
            src={profilepic}
            alt="my pic"
          />
          <div>
            <h5>
              {first_name} {last_name}
            </h5>{" "}
            <p>{city}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.profiles.profile
});
export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(MyProfile);
