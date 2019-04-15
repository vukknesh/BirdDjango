import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { updateHotel, getHotel } from "../../actions/hotels";
import "./main.css";
import isEmpty from "../../validation/is-empty";

class EditHotelPics extends Component {
  state = {
    image1: null,
    image2: null,
    image3: null,
    image4: null,

    errors: {}
  };
  componentDidMount() {
    this.props.getCurrentProfile(this.props.user.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hotel) {
      const hotel = nextProps.hotel;

      hotel.image1 = !isEmpty(hotel.image1) ? hotel.image1 : false;
      hotel.image2 = !isEmpty(hotel.image2) ? hotel.image2 : false;
      hotel.image3 = !isEmpty(hotel.image3) ? hotel.image3 : false;
      hotel.image4 = !isEmpty(hotel.image4) ? hotel.image4 : false;

      this.setState({
        image1: hotel.image1,
        image2: hotel.image2,
        image3: hotel.image3,
        image4: hotel.image4
      });
    }
  }

  image1Change = event => {
    this.setState({
      image1: event.target.files[0]
    });
  };
  image2Change = event => {
    this.setState({
      image2: event.target.files[0]
    });
  };
  image3Change = event => {
    this.setState({
      image3: event.target.files[0]
    });
  };
  image4Change = event => {
    this.setState({
      image4: event.target.files[0]
    });
  };
  onSubmit = event => {
    event.preventDefault();

    const fd = new FormData();
    if (this.state.image1 !== null) {
      fd.append("image1", this.state.image1, this.state.image1.name);
    }
    if (this.state.image2 !== null) {
      fd.append("image2", this.state.image2, this.state.image2.name);
    }
    if (this.state.image3 !== null) {
      fd.append("image3", this.state.image3, this.state.image3.name);
    }
    if (this.state.image4 !== null) {
      fd.append("image4", this.state.image4, this.state.image4.name);
    }

    let id = this.props.hotel.id;
    let token = this.props.token;
    this.props.updateHotel(fd, id, token, this.props.history);
  };

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Profile</h1>
            <p className="lead text-center">Edit Your Bird Watcher Profile</p>
            <p className="lead text-center">Profile Picture</p>
            <form onSubmit={this.onSubmit}>
              <input type="file" name="image1" onChange={this.image1Change} />{" "}
              Imagem 1
              <br />
              <input
                type="file"
                name="image2"
                className="mt-2"
                onChange={this.image2Change}
              />{" "}
              Imagem 2
              <br />
              <input
                type="file"
                name="image3"
                className="mt-2"
                onChange={this.image3Change}
              />{" "}
              Imagem 3
              <br />
              <input
                type="file"
                name="image4"
                className="mt-2"
                onChange={this.image4Change}
              />{" "}
              Imagem 4
              <br />
              <input
                type="submit"
                className="btn btn-block btn-info mb-5 mt-3"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

EditHotelPics.propTypes = {
  isAuthenticated: PropTypes.bool,

  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  token: state.auth.token,
  user: state.auth.user,
  hotel: state.hotels.hotel,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { updateHotel, getCurrentProfile, getHotel }
)(withRouter(EditHotelPics));
