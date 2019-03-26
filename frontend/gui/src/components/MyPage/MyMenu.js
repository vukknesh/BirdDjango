import React, { Component } from "react";
import MyProfile from "./MyProfile";

import PropTypes from "prop-types";
import { connect } from "react-redux";

class MyMenu extends Component {
  render() {
    return (
      <div className="btn-group-vertical d-flex flex-column ml-5 mr-4 ">
        <MyProfile />
      </div>
    );
  }
}

MyMenu.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(MyMenu);
