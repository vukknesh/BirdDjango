import React, { Component } from "react";
import MyProfile from "./MyProfile";
import { deleteAccount } from "../../actions/profileActions";
import { getCurrentUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class MyMenu extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const { user } = this.props.auth;

    return (
      <div className="btn-group-vertical d-flex flex-column ml-5 mr-4 ">
        <MyProfile user={user} />
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
  getCurrentUser: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentUser, deleteAccount }
)(MyMenu);
