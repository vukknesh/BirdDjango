import React, { Component } from "react";
import "./main.css";
class Hotels extends Component {
  render() {
    return (
      <div className="containerhotel">
        <form className="searchfield">
          <h2>Reserve acomodações e experiencias unicas.</h2>
          <p>ONDE</p>
          <input placeholder="Cidade" type="text" />
          <p>DATA</p>
          <input placeholder="Data" type="text" />
          <p>HOSPEDES</p>
          <input placeholder="Numero de hospedes" type="text" />
          <input onSubmit={this.onSubmit} className="btnsubmit" type="submit" />
        </form>
      </div>
    );
  }
}
export default Hotels;
