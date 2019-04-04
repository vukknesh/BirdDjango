import React, { Component } from "react";
import { getHotels } from "../../actions/hotels";
import Spinner from "../common/Spinner";
import { connect } from "react-redux";

import "../MyPage/main.css";
import { Link } from "react-router-dom";

class Accomodations extends Component {
  componentWillMount() {
    this.props.getHotels();
  }

  render() {
    let conteudoA;

    if (this.props.hotels === null) {
      conteudoA = <Spinner />;
    } else {
      conteudoA = this.props.hotels.results.map(hotel => {
        if (hotel.user_id == this.props.user.id) {
          return (
            <div className="card-container" key={hotel.id}>
              <div className="card-head">
                <div>
                  <Link to={`profilebyhandle/${hotel.user_id}/`}>
                    <img src={this.props.myprofile.image} alt="" />
                  </Link>
                </div>
                <section>
                  <span>
                    <Link to={`profilebyhandle/${hotel.user_id}/`}>
                      {hotel.first_name} {hotel.last_name}
                    </Link>
                  </span>
                  <p>{hotel.address}</p>
                </section>
              </div>
              <div className="card-body">
                <div className="content-hotel">
                  <img src={hotel.image1} alt="" />
                  <p>{hotel.content}</p>
                </div>

                <div>
                  <Link to={`hotelByHandle/${hotel.id}/`}>
                    <button className="edit-btn">Edit Fotos</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        }
      });
    }

    return <div className="d-flex flex-wrap w-100">{conteudoA}</div>;
  }
}
const mapStateToProps = state => ({
  user: state.auth.user,
  hotels: state.hotels.hotels,
  myprofile: state.profiles.myprofile
});

export default connect(
  mapStateToProps,
  { getHotels }
)(Accomodations);
