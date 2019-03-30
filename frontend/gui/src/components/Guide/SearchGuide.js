import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./guide.css";
export default class SearchGuide extends Component {
  state = {
    city: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.getProfilesByCity(this.state.city);
  };
  render() {
    if (this.props.profiles) {
      return <Redirect to="/guide" />;
    }
    return (
      <div>
        <form action="search" className="searchfield1" onSubmit={this.onSubmit}>
          <h2>Procure seu guia por cidade ou especie.</h2>
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
