import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { addHotel } from "../../actions/hotels";
import TextFieldGroup from "../common/TextFieldGroup";

import isEmpty from "../../validation/is-empty";

class AddHotel extends Component {
  state = {
    title: "",
    price: "",
    address: "",
    city: "",
    state: "",
    content: "",
    errors: {}
  };
  componentDidMount() {
    this.props.getCurrentProfile(this.props.user.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hotel) {
      const hotel = nextProps.hotel;

      hotel.title = !isEmpty(hotel.title) ? hotel.title : "";
      hotel.price = !isEmpty(hotel.price) ? hotel.price : "";
      hotel.address = !isEmpty(hotel.address) ? hotel.address : "";

      hotel.city = !isEmpty(hotel.city) ? hotel.city : "";
      hotel.state = !isEmpty(hotel.state) ? hotel.state : "";
      hotel.content = !isEmpty(hotel.content) ? hotel.content : "";

      this.setState({
        title: hotel.title,
        price: hotel.price,
        address: hotel.address,
        city: hotel.city,
        state: hotel.state,
        content: hotel.content
      });
    }
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    const { title, price, address, city, state, content } = this.state;

    const newHotel = {
      title,
      price,
      address,
      city,
      state,
      content
    };

    let token = this.props.token;

    this.props.addHotel(newHotel, token, this.props.history);
  };

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    // if (this.state.is_guide) {
    //   var is_guide = this.state.is_guide;
    // }
    // if (this.state.is_owner) {
    //   var is_owner = this.state.is_owner;
    // }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Hotel</h1>
            <p className="lead text-center">Registre sua acomodação</p>

            {/* {is_guide ? (
              <input
                type="checkbox"
                name="is_guide"
                checked={this.state.is_guide}
                value={this.state.is_guide}
                onChange={this.handleCheckboxGuide}
              />
            ) : (
              <input
                type="checkbox"
                name="is_guide"
                value={this.state.is_guide}
                onChange={this.handleCheckboxGuide}
              />
            )}{" "}
            - Guia <span className="mr-4" />
            {is_owner ? (
              <input
                type="checkbox"
                name="is_owner"
                checked={this.state.is_owner}
                value={this.state.is_owner}
                onChange={this.handleCheckboxOwner}
              />
            ) : (
              <input
                type="checkbox"
                name="is_owner"
                value={this.state.is_owner}
                onChange={this.handleCheckboxOwner}
              />
            )}{" "}
            - Acomodações */}
            <p className="lead text-center">Titulo</p>
            <form noValidate onSubmit={this.onSubmit}>
              <TextFieldGroup
                placeholder="Titulo"
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
                // error={errors.email}
              />
              <TextFieldGroup
                placeholder="Sobre seu lugar..."
                name="content"
                value={this.state.content}
                onChange={this.onChange}
                // error={errors.password}
                type="text"
              />

              <p className="lead text-center">Endereço</p>
              <TextFieldGroup
                placeholder="Endereço"
                type="text"
                name="address"
                value={this.state.address}
                onChange={this.onChange}
                // error={errors.name}
              />
              <TextFieldGroup
                placeholder="Cidade"
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.onChange}
                // error={errors.name}
              />
              <TextFieldGroup
                placeholder="Estado"
                type="text"
                name="state"
                value={this.state.state}
                onChange={this.onChange}
                // error={errors.name}
              />
              <TextFieldGroup
                placeholder="Preço"
                type="text"
                name="price"
                value={this.state.price}
                onChange={this.onChange}
                // error={errors.name}
              />

              <input type="submit" className="edit-btn" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const colorPrimary = {
  backgroundColor: "rgba(2, 206, 179, 0.7)",
  color: "white"
};

AddHotel.propTypes = {
  isAuthenticated: PropTypes.bool,

  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  token: state.auth.token,
  user: state.auth.user,
  profile: state.profiles.profile,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { addHotel, getCurrentProfile }
)(withRouter(AddHotel));
