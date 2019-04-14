import React, { Component } from "react";
import ProductPersonal from "./ProductPersonal";
import { connect } from "react-redux";

import { getProduct } from "../../actions/products";

class ProdutoProfile extends Component {
  state = {
    product: null
  };

  componentWillMount() {
    if (this.props.match.params.id) {
      // this.props.getProfileByHandle(this.props.match.params.id);
      this.props.getProduct(this.props.match.params.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hotel === null) {
      this.props.history.push("/not-found");
      this.setState({
        product: this.props.product
      });
    }
  }
  render() {
    return (
      <div>
        <ProductPersonal />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  product: state.products.product,
  isAuthenticated: state.auth.isAuthenticated,
  profile: state.profiles.profile
});
export default connect(
  mapStateToProps,
  { getProduct }
)(ProdutoProfile);
