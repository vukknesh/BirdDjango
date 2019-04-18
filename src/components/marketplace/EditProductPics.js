import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { updateProduct, getProduct } from "../../actions/products";
import "./main.css";
import isEmpty from "../../validation/is-empty";

class EditProductPics extends Component {
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
    if (nextProps.product) {
      const product = nextProps.product;

      product.image1 = !isEmpty(product.image1) ? product.image1 : false;
      product.image2 = !isEmpty(product.image2) ? product.image2 : false;
      product.image3 = !isEmpty(product.image3) ? product.image3 : false;
      product.image4 = !isEmpty(product.image4) ? product.image4 : false;

      this.setState({
        image1: product.image1,
        image2: product.image2,
        image3: product.image3,
        image4: product.image4
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

    let id = this.props.product.id;
    let token = this.props.token;
    this.props.updateProduct(fd, id, token, this.props.history);
  };

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Produtos</h1>
            <p className="lead text-center">Editar Fotos do Produto</p>

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
                className="btn btn-block btn-info mb-5 mt-2"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

EditProductPics.propTypes = {
  isAuthenticated: PropTypes.bool,

  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  token: state.auth.token,
  user: state.auth.user,
  product: state.products.product,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { updateProduct, getProduct, getCurrentProfile }
)(withRouter(EditProductPics));
