import React, { Component } from "react";
import Enter from "./Enter/Enter";
import "../Auth/Login.css";
import { Link } from "react-router-dom";

class Landing extends Component {
  state = {
    isActive: false
  };
  toggleState = e => {
    this.setState({ isActive: !this.state.isActive });
  };
  render() {
    return (
      <div>
        <Enter />
        <div className="corujao">
          <h1>Venha conhecer nosso Marketplace</h1>

          <Link className="link-landing" to="/marketplace">
            {" "}
            saiba mais
          </Link>
        </div>
        <div className="email">
          <p>Quer saber mais? cadastre seu email aqui:</p>

          <input
            className={
              this.state.isActive ? "border border-primary p-2" : "shadow"
            }
            onFocus={this.toggleState}
            type="text"
          />
          <i class="fas fa-mail-bulk" />
        </div>
        <div className="voos">
          <h1>Que tal planejar sua viagem em um so lugar?</h1>
          <Link className="link-voos" to="/flights">
            Veja voos
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
