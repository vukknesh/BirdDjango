import React, { Component } from "react";
import MyProfile from "./MyProfile";

import PropTypes from "prop-types";
import { connect } from "react-redux";

class MyMenu extends Component {
  render() {
    return (
      <div className="btn-group-vertical d-flex flex-column ml-5 mr-4 ">
        <MyProfile />
        <button
          type="button"
          className="btn btn-block btn-light border border-secondary"
        >
          Profile
        </button>
        <button type="button" className="btn btn-block btn-success">
          Messages
        </button>
        <button type="button" className="btn btn-block btn-success">
          Fotos
        </button>
        <button type="button" className="btn btn-block btn-success">
          My Products
        </button>
        <button type="button" className="btn btn-block btn-success">
          Back
        </button>
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
