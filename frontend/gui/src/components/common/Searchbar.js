import React, { Component } from "react";
import { getProfilesByCity } from "../../actions/profile";
import { connect } from "react-redux";
import "./Searchcss.css";
import { Redirect } from "react-router-dom";
class Searchbar extends Component {
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
      <div className="containersearch">
        <form action="search" className="searchfield" onSubmit={this.onSubmit}>
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
            placeholder="Procure seu guia por especie"
            name="city"
            disabled
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
)(Searchbar);
