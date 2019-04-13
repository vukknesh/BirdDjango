import React, { Component } from "react";
import { Link } from "react-router-dom";
import { clearAllProfiles } from "../../actions/profile";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";

class HotelOwners extends Component {
  render() {
    let hotels;
    if (this.props.isLoading) {
      hotels = <Spinner />;
    } else {
      if (this.props.hotels) {
        console.log(this.props.hotels);
        hotels = this.props.hotels.map(hotel => (
          <div className="box" key={hotel.id}>
            <Link to={`hotelByHandle/${hotel.id}/`}>
              <div className="imgBx">
                <img src={hotel.image1} className="imgBx" alt="..." />
              </div>
            </Link>

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
            <Link to={`hotelByHandle/${hotel.id}/`}>
              <div className="details">
                <h2>
                  {hotel.title}
                  <br />
                  <span>
                    {hotel.city}- {hotel.state}
                  </span>
                  <p>R$ {hotel.price}</p>
                </h2>
              </div>
            </Link>
          </div>
        ));
      }
    }
    return <div className="container d-flex flex-wrap figuras1">{hotels}</div>;
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  hotels: state.hotels.hotels,
  isLoading: state.hotels.isLoading
});

export default connect(
  mapStateToProps,
  { clearAllProfiles }
)(HotelOwners);
