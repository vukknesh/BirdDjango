import React, { Component } from "react";
import GuideUser from "./GuideUser";
import { connect } from "react-redux";
import Searchbar from "../common/Searchbar";

class Guide extends Component {
  render() {
    return (
      <div className="container">
        <Searchbar />
        <GuideUser />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Guide);
