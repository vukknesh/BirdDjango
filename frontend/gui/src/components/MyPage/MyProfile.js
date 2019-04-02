import React, { Component } from "react";
import { getCurrentProfile, clearCurrentProfile } from "../../actions/profile";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
    // this.props.clearCurrentProfile();
  }

  render() {
    if (this.props.profile) {
      var first_name = this.props.profile.first_name;
      var last_name = this.props.profile.last_name;
      var image = this.props.profile.image;
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
            <img src={image} alt="my pic" />
            <div>
              <h5>
                {first_name} {last_name}
              </h5>{" "}
              <p>{city}</p>
              <div className="status">
                <p>
                  <i className="fas fa-check" />
                  Watcher
                </p>
                {is_guide ? (
                  <p>
                    <i className="fas fa-check" />
                    Guide
                  </p>
                ) : null}

                {is_owner ? (
                  <p>
                    <i className="fas fa-check" />
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
                <i className="far fa-thumbs-up" /> Social Medias ->
              </p>
              <div className="dropdown-menu">
                {instagram ? (
                  <a href="#">
                    <i className="fab fa-instagram" />
                    Instagram
                  </a>
                ) : null}
                {youtube ? (
                  <a href="#">
                    <i className="fab fa-youtube" />
                    Youtube
                  </a>
                ) : null}
                {facebook ? (
                  <a href="#">
                    <i className="fab fa-facebook" />
                    Facebook
                  </a>
                ) : null}
                {wikiaves ? (
                  <a href="#">
                    <i className="fas fa-dove" />
                    Wikiaves
                  </a>
                ) : null}
              </div>
            </div>

            <p>
              <Link to="/my-comments">
                <i className="far fa-comments" /> Comentarios Feitos
              </Link>
            </p>

            <p>
              <Link to="/my-messages">
                <i className="far fa-envelope" /> Minhas Menssagens
              </Link>
            </p>

            <p>
              <Link to="/edit-profile">
                <i className="far fa-address-card" /> Editar Perfil
              </Link>
            </p>

            <p>
              <Link to="/edit-profile-pic">
                <i className="fas fa-camera-retro" /> Editar Foto
              </Link>
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
