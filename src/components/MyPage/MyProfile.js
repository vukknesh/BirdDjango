import React, { Component } from "react";
import { getCurrentProfile, getMyProfile } from "../../actions/profile";
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
    this.props.getMyProfile(this.props.user.id);
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
                <i className="far fa-thumbs-up" /> {"  "} Social Medias
              </p>

              <ul className="dropdown-menu">
                {instagram ? (
                  <li>
                    <a
                      target="_blank"
                      href={`https://www.instagram.com/${instagram}`}
                    >
                      <i className="fab fa-instagram" />
                      Instagram
                    </a>
                  </li>
                ) : null}
                {youtube ? (
                  <li>
                    <a
                      target="_blank"
                      href={`https://www.youtube.com/${youtube}`}
                    >
                      <i className="fab fa-youtube" />
                      Youtube
                    </a>
                  </li>
                ) : null}
                {facebook ? (
                  <li>
                    <a
                      target="_blank"
                      href={`https://www.facebook.com/${facebook}`}
                    >
                      <i className="fab fa-facebook" />
                      Facebook
                    </a>
                  </li>
                ) : null}
                {wikiaves ? (
                  <li>
                    <a
                      target="_blank"
                      href={`https://www.wikiaves.com.br/perfil_${wikiaves}`}
                    >
                      <i className="fas fa-dove" />
                      Wikiaves
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
            {is_owner ? (
              <Link to="/my-accomodations" className="link-to">
                <p>
                  <i className="fas fa-home" /> {"  "} Minhas Acomodações
                </p>
              </Link>
            ) : null}
            {is_owner ? (
              <Link to="/my-products" className="link-to">
                <p>
                  <i className="fas fa-box-open" /> {"  "} Meus Produtos
                </p>
              </Link>
            ) : null}

            <Link to="/my-comments" className="link-to">
              <p>
                <i className="far fa-comments" /> {"  "}Meus Comentarios
              </p>
            </Link>

            <Link to="/my-messages" className="link-to">
              <p>
                <i className="far fa-envelope" /> {"  "} Meus Posts
              </p>
            </Link>

            <Link to="/edit-profile" className="link-to">
              <p>
                <i className="far fa-address-card" /> {"  "}
                Editar Perfil
              </p>
            </Link>

            <Link to="/edit-profile-pic" className="link-to">
              <p>
                <i className="fas fa-camera-retro" /> {"  "}Editar Foto
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.profiles.profile,
  myprofile: state.profiles.myprofile
});
export default connect(
  mapStateToProps,
  { getCurrentProfile, getMyProfile }
)(MyProfile);
