import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { addProduct } from "../../actions/products";
import TextFieldGroup from "../common/TextFieldGroup";

import isEmpty from "../../validation/is-empty";

class AddProduct extends Component {
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
    if (nextProps.products) {
      const products = nextProps.products;

      products.title = !isEmpty(products.title) ? products.title : "";
      products.price = !isEmpty(products.price) ? products.price : "";
      products.address = !isEmpty(products.address) ? products.address : "";

      products.city = !isEmpty(products.city) ? products.city : "";
      products.state = !isEmpty(products.state) ? products.state : "";
      products.content = !isEmpty(products.content) ? products.content : "";

      this.setState({
        title: products.title,
        price: products.price,
        address: products.address,
        city: products.city,
        state: products.state,
        content: products.content
      });
    }
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    const { title, price, address, city, state, content } = this.state;

    const newProduct = {
      title,
      price,
      address,
      city,
      state,
      content
    };

    let token = this.props.token;

    this.props.addProduct(newProduct, token, this.props.history);
  };

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Produto</h1>
            <p className="lead text-center">Registre seu Produto</p>

            <p className="lead">Titulo</p>
            <form noValidate onSubmit={this.onSubmit}>
              <TextFieldGroup
                placeholder="Titulo"
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
              />
              <TextFieldGroup
                placeholder="Sobre seu produto"
                name="content"
                value={this.state.content}
                onChange={this.onChange}
                type="text"
              />

              <p className="lead">Endereço</p>
              <TextFieldGroup
                placeholder="Endereço"
                type="text"
                name="address"
                value={this.state.address}
                onChange={this.onChange}
              />
              <TextFieldGroup
                placeholder="Cidade"
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.onChange}
              />
              <TextFieldGroup
                placeholder="Estado"
                type="text"
                name="state"
                value={this.state.state}
                onChange={this.onChange}
              />
              <p className="lead">Preço</p>
              <TextFieldGroup
                placeholder="Preço"
                type="text"
                name="price"
                value={this.state.price}
                onChange={this.onChange}
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

AddProduct.propTypes = {
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
  { addProduct, getCurrentProfile }
)(withRouter(AddProduct));
