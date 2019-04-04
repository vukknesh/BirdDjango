import React, { Component } from "react";

import { clearAllProfiles } from "../../actions/profile";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";
import { Link } from "react-router-dom";

import "./guide.css";

class GuideUser extends Component {
  componentWillUnmount() {
    this.props.clearAllProfiles();
  }

  render() {
    if (this.props.isLoading) {
      var conteudo = <Spinner />;
    } else {
      if (this.props.profiles) {
        var conteudo = this.props.profiles.map(profile => {
          if (profile.is_guide) {
            return (
              <div className="box" key={profile.id}>
                <Link to={`profilebyhandle/${profile.id}/`}>
                  <div className="imgBx">
                    <img src={profile.image} className="imgBx" alt="..." />
                  </div>
                </Link>
                <ul className="social-icon">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://www.youtube.com/${profile.youtube}`}
                      target="_blank"
                    >
                      <i className="fab fa-youtube" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-dove" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
                <Link to={`profilebyhandle/${profile.id}/`}>
                  <div className="details">
                    <h2>
                      {profile.first_name} {profile.last_name}
                      <br />
                      <span>{profile.city}</span>
                    </h2>
                  </div>
                </Link>
              </div>
            );
          }
        });
      }
    }

    return <div className="container d-flex flex-wrap figuras">{conteudo}</div>;
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  profiles: state.profiles.profiles
});

export default connect(
  mapStateToProps,
  { clearAllProfiles }
)(GuideUser);
