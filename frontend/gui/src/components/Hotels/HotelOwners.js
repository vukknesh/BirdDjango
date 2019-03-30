import React, { Component } from "react";

import { clearAllProfiles } from "../../actions/profile";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";
import hotelpic from "./hotel.jpg";

class HotelOwners extends Component {
  componentWillUnmount() {
    this.props.clearAllProfiles();
  }

  render() {
    if (this.props.isLoading) {
      var hotels = <Spinner />;
    } else {
      // if (this.props.profiles) {
      //   var conteudo = this.props.profiles.map(profile =>key={profile.id}
      var hotels = (
        <div className="box">
          <div className="imgBx">
            <img src={hotelpic} alt="..." />
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
              Hotel do Guia
              <br />
              <span>City</span>
              <p>R$ 137 por dia ****</p>
            </h2>
          </div>
        </div>
      );
    }
    return <div className="container d-flex flex-wrap figuras1">{hotels}</div>;
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  profiles: state.profiles.profiles
});

export default connect(
  mapStateToProps,
  { clearAllProfiles }
)(HotelOwners);
