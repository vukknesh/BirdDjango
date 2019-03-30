import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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
const mapStateToProps = state => ({
  profiles: state.profiles.profiles
});
export default connect(
  mapStateToProps,
  { getProfilesByCity }
)(SearchGuide);
