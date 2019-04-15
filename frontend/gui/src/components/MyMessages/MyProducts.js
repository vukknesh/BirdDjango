import React, { Component } from "react";
import { getProducts } from "../../actions/products";
import Spinner from "../common/Spinner";
import { connect } from "react-redux";

import "../MyPage/main.css";
import { Link } from "react-router-dom";

class MyProducts extends Component {
  componentWillMount() {
    this.props.getProducts();
  }

  render() {
    let conteudoA;

    if (this.props.products === null) {
      conteudoA = <Spinner />;
    } else {
      conteudoA = this.props.products.map(product => {
        if (product.user_id == this.props.user.id) {
          return (
            <div className="card-container" key={product.id}>
              <div className="card-head">
                <div>
                  <Link to={`profilebyhandle/${product.user_id}/`}>
                    <img src={this.props.myprofile.image} alt="" />
                  </Link>
                </div>
                <section>
                  <span>
                    <Link to={`profilebyhandle/${product.user_id}/`}>
                      {product.first_name} {product.last_name}
                    </Link>
                  </span>
                  <p>{product.address}</p>
                </section>
              </div>
              <div className="card-body">
                <div className="content-hotel">
                  <img src={product.image1} alt="" />
                  <p>{product.content}</p>
                </div>

                <div>
                  <Link to={`productByHandle/${product.id}/`}>
                    <button className="edit-btn">Editar</button>
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
  products: state.products.products,
  myprofile: state.profiles.myprofile
});

export default connect(
  mapStateToProps,
  { getProducts }
)(MyProducts);
