import React, { Component } from "react";

export default class Items extends Component {
  render() {
    let produtos;

    if (this.props.products) {
      produtos = this.props.products.map(produto => (
        <div className=" " key={produto.id}>
          <h1>{produto.title}</h1>
        </div>
      ));
    }
    return <div className="">{produtos}</div>;
  }
}
