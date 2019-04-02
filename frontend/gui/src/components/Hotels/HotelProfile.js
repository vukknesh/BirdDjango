import React, { Component } from "react";
import "./main.css";
import pic from "../MyPage/profile1.jpg";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

class HotelProfile extends Component {
  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/login" />;
    }
    if (this.props.hotel) {
      var title = this.props.hotel.title;
      var city = this.props.hotel.city;
      var content = this.props.hotel.content;
      var state = this.props.hotel.state;
      var address = this.props.hotel.address;
      var first_name = this.props.hotel.user.first_name;
      var last_name = this.props.hotel.user.last_name;
    }
    return (
      <div className="hotel-container">
        <div className="top-content">
          <img src={pic} alt="" className="first-image" />

          <img src={pic} alt="" className="second-image" />
          <img src={pic} alt="" className="third-image" />
          <img src={pic} alt="" className="fourth-image" />
        </div>

        <div className="hotel-content">
          <div className="hotel-info">
            <h1>{title}</h1>
            <p>
              {city}-{state}
            </p>
            <p>*****</p>
            <p>numero de votos</p>
            <i className="fas fa-home" />
            <p>Address: {address}</p>
            <i className="fas fa-phone-square" />
            <p>telefone: (019)99645499</p>
            <i className="fas fa-info" />
            <p>{content}</p>
            <div className="commodities">
              <i className="fas fa-wifi" />
              <i className="fas fa-check" />- <i className="fas fa-coffee" />{" "}
              <i className="fas fa-check" />
              <i className="fas fa-igloo" />
              <i className="fas fa-check" />
            </div>
            <div className="comments">
              <div className="comment-owner">
                <img src={pic} alt="" />
                <h5>Leonardo Neshich</h5>
              </div>

              <hr />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus earum explicabo aperiam aut necessitatibus voluptate
                maiores, expedita ipsum id ratione totam quibusdam, a distinctio
                temporibus vitae cumque facilis sit mollitia.
              </p>

              <div className="comment-owner">
                <img src={pic} alt="" />
                <h5>Leonardo Neshich</h5>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus earum explicabo aperiam aut necessitatibus voluptate ma
              </p>
              <div className="comment-owner">
                <img src={pic} alt="" />
                <h5>Leonardo Neshich</h5>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus xplicabo aperiam aut necessitatibus voluptate ma
              </p>
            </div>
          </div>
          <div className="owner-info">
            <div className="hotel-owner">
              <img src={pic} alt="" />
              <h5>
                {first_name} {last_name}
              </h5>
            </div>
            <div className="personal">
              <p>email</p>
              <p>instagram</p>
              <p>facebook</p>
              <p>wikiaves</p>
              <p>youtube</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hotel: state.hotels.hotel,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(HotelProfile);