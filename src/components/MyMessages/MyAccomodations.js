import React, { Component } from "react";
import MyProfile from "../MyPage/MyProfile";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Accomodations from "./Accomodations";

class MyAccomodations extends Component {
  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div style={pageStyle} className="mt-3  bg-light">
        <div className="row h-100 ">
          <div className="w-25 d-flex justify-content-center">
            <MyProfile />
          </div>
          <div className="w-75 d-flex">
            <Accomodations />
          </div>
        </div>
      </div>
    );
  }
}

const pageStyle = {
  height: "100%",
  width: "100%"
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps)(MyAccomodations);
