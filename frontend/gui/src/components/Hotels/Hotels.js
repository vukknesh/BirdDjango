import React, { Component } from "react";
import "./main.css";
import { getHotels, getHotelsByCity } from "../../actions/hotels";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class Hotels extends Component {
  state = {
    city: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.getHotels();
  };
  render() {
    if (this.props.hotels) {
      return <Redirect to="/hotels" />;
    }
    return (
      <div className="containerhotel">
        <form className="searchfield" onSubmit={this.onSubmit}>
          <h2>Reserve acomodações e experiencias unicas.</h2>
          <p>ONDE</p>
          <input
            placeholder="Cidade"
            onChange={this.onChange}
            type="text"
            name="city"
          />
          <p>DATA</p>
          <input placeholder="Data" onChange={this.onChange} type="text" />
          <p>HOSPEDES</p>
          <input
            placeholder="Numero de hospedes"
            onChange={this.onChange}
            type="text"
          />
          <input className="btnsubmit" type="submit" />
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
)(Hotels);
