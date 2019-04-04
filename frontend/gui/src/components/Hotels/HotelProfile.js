import React, { Component } from "react";
import "./main.css";
import pic from "../MyPage/profile1.jpg";
import { Redirect, Link } from "react-router-dom";

import { connect } from "react-redux";

class HotelProfile extends Component {
  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/login" />;
    }
    if (this.props.hotel) {
      var id = this.props.hotel.user.id;
      var title = this.props.hotel.title;
      var city = this.props.hotel.city;
      var content = this.props.hotel.content;
      var state = this.props.hotel.state;
      var address = this.props.hotel.address;
      var first_name = this.props.hotel.user.first_name;
      var last_name = this.props.hotel.user.last_name;
      var image1 = this.props.hotel.image1;
      var image2 = this.props.hotel.image2;
      var image3 = this.props.hotel.image3;
      var image4 = this.props.hotel.image4;
    }

    return (
      <div className="hotel-container">
        <div className="top-content">
          <img src={image1} alt="" />

          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
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
                <img src={image2} alt="" />
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
            {this.props.myprofile.id === id ? (
              <Link to="/edit-hotel-pics">
                <button className="edit-btn">Editar Fotos</button>
              </Link>
            ) : null}
            {this.props.myprofile.id === id ? (
              <Link to="/edit-hotel">
                <button className="edit-btn">Editar Dados</button>
              </Link>
            ) : null}
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
  isAuthenticated: state.auth.isAuthenticated,
  myprofile: state.profiles.myprofile
});

export default connect(mapStateToProps)(HotelProfile);
