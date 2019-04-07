import React, { Component } from "react";
import "./main.css";

export default class MarketPlace extends Component {
  render() {
    return (
      <div className="market">
        <div className="searchbox">
          <div className="searchmarket">
            <h1>MarketPlace</h1>
            <form action="">
              <select>
                <option value="all">Categorias</option>
                <option value="volvo">Cameras</option>
                <option value="saab">Lentes</option>
                <option value="mercedes">Roupas</option>
                <option value="audi">Acessorios</option>
              </select>

              <input type="text" placeholder="O que procura?" />
              <button type="submit" className="submit-btn" value="Procurar">
                <i class="fas fa-search" />
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
