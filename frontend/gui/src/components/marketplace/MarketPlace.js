import React, { Component } from "react";
import "./main.css";
import Items from "./Items";
import { connect } from "react-redux";
import { getProducts } from "../../actions/products";

class MarketPlace extends Component {
  state = {
    termo: ""
  };

  // componentWillMount() {
  //   this.props.getProducts();
  // }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    // const { termo } = this.state;
    // this.props.getProductsByCity(termo);
    console.log(this.state.termo);
    this.props.getProducts();
  };

  render() {
    return (
      <div className="market">
        <div className="searchbox">
          <div className="searchmarket">
            <h1>MarketPlace</h1>
            <form onSubmit={this.onSubmit}>
              <select>
                <option value="all">Categorias</option>
                <option value="volvo">Cameras</option>
                <option value="saab">Lentes</option>
                <option value="mercedes">Roupas</option>
                <option value="audi">Acessorios</option>
              </select>

              <input
                type="text"
                placeholder="O que procura?"
                name="termo"
                value={this.state.termo}
                onChange={this.onChange}
              />
              <button type="submit" className="submit-btn" value="Procurar">
                <i className="fas fa-search" />
              </button>
            </form>
          </div>
          <div className="produtos">
            {this.props.products ? (
              <Items products={this.props.products} />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(
  mapStateToProps,
  { getProducts }
)(MarketPlace);
