import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./main.css";
export default class Items extends Component {
  render() {
    let produtos;

    if (this.props.products) {
      produtos = this.props.products.map(produto => (
        <Link
          className="produto-cartao"
          to={`/item-info/${produto.id}/`}
          key={produto.id}
        >
          <div className="produto-img">
            <img src={produto.image1} alt="" />
          </div>
          <div className="produto-info">
            <h2>{produto.title}</h2>
            <p>R$: {produto.price}</p>
          </div>
        </Link>
      ));
    }
    return <div className="produtos">{produtos}</div>;
  }
}
