import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { updateProduct } from "../../actions/products";
import TextFieldGroup from "../common/TextFieldGroup";

import isEmpty from "../../validation/is-empty";

class EditProduct extends Component {
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
    if (nextProps.product) {
      const product = nextProps.product;

      product.title = !isEmpty(product.title) ? product.title : "";
      product.price = !isEmpty(product.price) ? product.price : "";
      product.address = !isEmpty(product.address) ? product.address : "";

      product.city = !isEmpty(product.city) ? product.city : "";
      product.state = !isEmpty(product.state) ? product.state : "";
      product.content = !isEmpty(product.content) ? product.content : "";

      this.setState({
        title: product.title,
        price: product.price,
        address: product.address,
        city: product.city,
        state: product.state,
        content: product.content
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
    let id = this.props.product.id;

    this.props.updateProduct(newProduct, id, token, this.props.history);
  };

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Hotel</h1>
            <p className="lead text-center">Editar sua acomodação</p>

            <p className="lead text-center">Titulo</p>
            <form noValidate onSubmit={this.onSubmit}>
              <TextFieldGroup
                placeholder="Titulo"
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
              />
              <TextFieldGroup
                placeholder="Sobre seu lugar..."
                name="content"
                value={this.state.content}
                onChange={this.onChange}
                type="text"
              />

              <p className="lead text-center">Endereço</p>
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
                // error={errors.name}
              />
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

EditProduct.propTypes = {
  isAuthenticated: PropTypes.bool,

  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  token: state.auth.token,
  user: state.auth.user,
  product: state.products.product,
  profile: state.profiles.profile,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, updateProduct }
)(withRouter(EditProduct));
