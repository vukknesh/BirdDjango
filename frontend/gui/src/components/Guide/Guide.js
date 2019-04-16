import React, { Component } from "react";
import GuideUser from "./GuideUser";
import SearchGuide from "./SearchGuide";
import { connect } from "react-redux";
import Searchbar from "../common/Searchbar";
import MapContainer from "../Maps/MapContainer";
import "./guide.css";

class Guide extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <div className="container2">
          <div className="sub1">
            <SearchGuide />
          </div>
          <div className="sub2">
            <div className="gmap-container">
              <MapContainer profiles={this.props.profiles} />
            </div>
            <div className="hotel-owner-container ml-4">
              <GuideUser />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  profiles: state.profiles.profiles
});

export default connect(mapStateToProps)(Guide);
