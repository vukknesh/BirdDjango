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
                  {profile.facebook ? (
                    <li>
                      <a
                        href={`https://www.facebook.com/${profile.facebook}`}
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" aria-hidden="true" />
                      </a>
                    </li>
                  ) : null}
                  {profile.youtube ? (
                    <li>
                      <a
                        href={`https://www.youtube.com/${profile.youtube}`}
                        target="_blank"
                      >
                        <i className="fab fa-youtube" aria-hidden="true" />
                      </a>
                    </li>
                  ) : null}
                  {profile.instagram ? (
                    <li>
                      <a
                        href={`https://www.instagram.com/${profile.instagram}`}
                        target="_blank"
                      >
                        <i className="fab fa-instagram" aria-hidden="true" />
                      </a>
                    </li>
                  ) : null}
                  {profile.wikiaves ? (
                    <li>
                      <a
                        href={`https://www.wikiaves.com.br/${profile.wikiaves}`}
                        target="_blank"
                      >
                        <i className="fas fa-dove" aria-hidden="true" />
                      </a>
                    </li>
                  ) : null}
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
