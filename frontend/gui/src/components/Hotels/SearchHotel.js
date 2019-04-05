import React, { Component } from "react";
import { connect } from "react-redux";
import "./main.css";
import { getHotels, getHotelsByCity } from "../../actions/hotels";

class SearchHotel extends Component {
  state = {
    city: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.getHotelsByCity(this.state.city);
  };
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
const mapStateToProps = state => ({
  hotels: state.hotels.hotels
});

export default connect(
  mapStateToProps,
  { getHotels, getHotelsByCity }
)(SearchHotel);
