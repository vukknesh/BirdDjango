import React, { Component } from "react";
import "./main.css";

export default class SearchHotel extends Component {
  render() {
    return (
      <div>
        <form action="search" className="searchfield1" onSubmit={this.onSubmit}>
          <h2>Procure um quarto ou Hotel</h2>
          <p>CIDADE</p>
          <input
            type="text"
            placeholder="Procure seu guia por cidade"
            name="city"
            className=""
            onChange={this.onChange}
          />
          <p>ESPECIE</p>
          <input
            type="text"
            placeholder="Procure seu guia por cidade"
            name="city"
            className=""
            onChange={this.onChange}
          />

          <input type="submit" className="btnsubmit" />
        </form>
      </div>
    );
  }
}
