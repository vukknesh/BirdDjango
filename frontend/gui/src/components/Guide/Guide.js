import React, { Component } from "react";
import GuideUser from "./GuideUser";
import SearchGuide from "./SearchGuide";
import { connect } from "react-redux";
import Searchbar from "../common/Searchbar";
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
            <GuideUser />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Guide);
