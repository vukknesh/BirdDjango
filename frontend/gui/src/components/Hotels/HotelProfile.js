import React, { Component } from "react";
import "./main.css";
import { deleteHotel, getHotel } from "../../actions/hotels";
import { Redirect, Link, withRouter } from "react-router-dom";
import HotelComments from "./HotelComments";
import HotelForm from "./HotelForm";
import { connect } from "react-redux";

class HotelProfile extends Component {
  state = {
    content: ""
  };

  deleteHotel = e => {
    let token = this.props.token;
    let id = this.props.hotel.id;
    this.props.deleteHotel(id, token, this.props.history);
  };

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
      var comments = this.props.hotel.comments;
    }
    if (this.props.profile) {
      var image = this.props.profile.image;
      var email = this.props.profile.email;
      var instagram = this.props.profile.instagram;
      var wikiaves = this.props.profile.wikiaves;
      var facebook = this.props.profile.facebook;
      var youtube = this.props.profile.youtube;
      var city = this.props.profile.city;
      var state = this.props.profile.state;
      var id = this.props.profile.user;
    }

    return (
      <div className="hotel-container">
        <div className="top-content">
          <a target="_blank" href={image1}>
            <img src={image1} alt="" />
          </a>
          <a target="_blank" href={image2}>
            <img src={image2} alt="" />
          </a>
          <a target="_blank" href={image3}>
            <img src={image3} alt="" />
          </a>
          <a target="_blank" href={image4}>
            <img src={image4} alt="" />
          </a>
        </div>

        <div className="hotel-content">
          <div className="hotel-info">
            <div className="hotel-content-info">
              <h1>{title}</h1>
              <p>
                {city}-{state}
              </p>
              <hr />
              <i className="fas fa-home" /> <p>Address: {address}</p>
              <i className="fas fa-phone-square" />
              <p>telefone: (019)99645499</p>
              <i className="fas fa-info" />
              <p>{content}</p>
              <div className="commodities">
                <i className="fas fa-wifi" />
                <i className="fas fa-check pr-3" />-{" "}
                <i className="fas fa-coffee" />{" "}
                <i className="fas fa-check pr-3" />
                <i className="fas fa-igloo" />
                <i className="fas fa-check" />
              </div>
            </div>

            <div className="hotel-comments">
              <HotelForm />
              <div className="hotel-comments-retrieve">
                {this.props.hotel ? (
                  <HotelComments comments={comments} />
                ) : null}
              </div>
            </div>
          </div>
          <div className="owner-info">
            <Link to={`/profilebyhandle/${id}/`}>
              <div className="hotel-owner p-5">
                <img src={image} alt="" />
                <h5>
                  {first_name} {last_name}
                </h5>
              </div>
            </Link>

            <div className="personal">
              <p>Email: {email}</p>
              <p>
                {city}-{state}
              </p>
              <p>{facebook}</p>
              <p>{wikiaves}</p>
              <p>{youtube}</p>
            </div>
            <div className="editar-botoes">
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
              {this.props.myprofile.id === id ? (
                <button onClick={this.deleteHotel} className="btn btn-danger ">
                  Deletar
                </button>
              ) : null}
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
  myprofile: state.profiles.myprofile,
  profile: state.profiles.profile,
  token: state.auth.token
});

export default connect(
  mapStateToProps,
  { deleteHotel, getHotel }
)(withRouter(HotelProfile));
