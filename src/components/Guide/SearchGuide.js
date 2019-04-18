import React, { Component } from "react";

import "./guide.css";
import { connect } from "react-redux";
import { getProfilesByCity } from "../../actions/profile";

class SearchGuide extends Component {
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
    return (
      <div className="procurar">
        <form onSubmit={this.onSubmit}>
          <h2>Procure seu guia por cidade ou especie.</h2>
          <p>CIDADE</p>
          <input
            type="text"
            placeholder="Procure seu guia por cidade"
            name="city"
            onChange={this.onChange}
          />
          <p>ESPECIE</p>
          <input
            type="text"
            placeholder="Procure seu guia por Especie"
            name="city"
            disabled
          />

          <button type="submit" className="btnsubmit1">
            Procurar
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profiles: state.profiles.profiles
});
export default connect(
  mapStateToProps,
  { getProfilesByCity }
)(SearchGuide);
