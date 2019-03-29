import React, { Component } from "react";
import profilepic from "../MyPage/profile1.jpg";
import { clearAllProfiles } from "../../actions/profile";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";

class GuideUser extends Component {
  componentWillUnmount() {
    this.props.clearAllProfiles();
  }

  render() {
    console.log(this.props.profiles);
    if (this.props.isLoading) {
      var conteudo = <Spinner />;
    } else {
      if (this.props.profiles) {
        var conteudo = this.props.profiles.map(profile => (
          <div className="box" key={profile.id}>
            <div className="imgBx">
              <img src={profilepic} alt="..." />
            </div>
            <ul className="social-icon">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#">
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
            <div className="details">
              <h2>
                {profile.first_name} {profile.last_name}
                <br />
                <span>{profile.city}</span>
              </h2>
            </div>
          </div>
        ));
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
