import React, { Component } from "react";
import { getCurrentProfile, clearCurrentProfile } from "../../actions/profile";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import profilepic from "./profile1.jpg";
import isEmpty from "../../validation/is-empty";
import "./main.css";

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
  componentWillUnmount() {
    this.props.clearCurrentProfile();
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
      var is_guide = this.props.profile.is_guide;
      var is_owner = this.props.profile.is_owner;
    }

    return (
      <div className="myprofile-container">
        <div className="card s-top submy">
          <div className="color">
            <img src={profilepic} alt="my pic" />
            <div>
              <h5>
                {first_name} {last_name}
              </h5>{" "}
              <p>{city}</p>
              <div className="status">
                <p>
                  <i class="fas fa-check" />
                  Watcher
                </p>
                {is_guide ? (
                  <p>
                    <i class="fas fa-check" />
                    Guide
                  </p>
                ) : null}

                {is_owner ? (
                  <p>
                    <i class="fas fa-check" />
                    Owner
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          <div className="menucard">
            <div className="dropright">
              <p
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="far fa-thumbs-up" /> Social Medias ->
              </p>
              <div className="dropdown-menu">
                <a href="#">
                  <i class="fab fa-instagram" />
                  Instagram
                </a>
                <a href="#">
                  <i class="fab fa-youtube" />
                  youtube
                </a>
                <a href="#">
                  <i class="fab fa-facebook" />
                  facebook
                </a>
              </div>
            </div>
            <p>
              <i class="far fa-comments" /> Comentarios Feitos
            </p>
            <p>
              <i class="far fa-envelope" /> Minhas Menssagens
            </p>
            <p>
              <Link to="/edit-profile">
                <i class="far fa-address-card" /> Editar Perfil
              </Link>
            </p>

            <p>
              <i class="fas fa-camera-retro" /> Editar Foto
            </p>
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
  { getCurrentProfile, clearCurrentProfile }
)(MyProfile);
