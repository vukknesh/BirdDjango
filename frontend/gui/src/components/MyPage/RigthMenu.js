import React, { Component } from "react";
import owllogo from "../layout/images.png";

export default class RigthMenu extends Component {
  render() {
    return (
      <div
        className="container
        d-flex flex-column s-top"
      >
        <div className="mb-4  mr-5">
          <div className="card">
            <div className="card-header font-weight-bold">Adds</div>

            <div className="card-body">
              <p className="card-text">Anuncie Aqui!</p>
            </div>
          </div>
        </div>
        <div>
          <div className="card mb-3  mr-5">
            <div className="card-header font-weight-bold">Produtos</div>
            <div className="col-md-4">Em Breve!</div>
            <div className="col-md-8" />
          </div>
        </div>
      </div>
    );
  }
}
