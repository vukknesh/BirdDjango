import React, { Component } from "react";
import Hotels from "./Hotels";
import HotelOwners from "./HotelOwners";
import SearchHotel from "./SearchHotel";
import { connect } from "react-redux";
import "./main.css";

class FindHotels extends Component {
  render() {
    return (
      <div>
        {/* <Hotels /> */}
        <div className="container2">
          <div className="sub1">
            <SearchHotel />
          </div>
          <div className="sub2">
            <HotelOwners />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(FindHotels);
