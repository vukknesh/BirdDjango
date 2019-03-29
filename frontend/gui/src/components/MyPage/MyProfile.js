import React, { Component } from "react";
import { getCurrentProfile } from "../../actions/profile";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import profilepic from "./profile1.jpg";
import isEmpty from "../../validation/is-empty";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      profile: null
    };
  }
  componentDidMount() {
    this.props.getCurrentProfile(this.props.user.id);
  }

  render() {
    if (this.props.profile) {
      var first_name = this.props.profile.first_name;
      var last_name = this.props.profile.last_name;
      var email = this.props.profile.email;
      var city = this.props.profile.city;
      var facebook = this.props.profile.facebook;
      var instagram = this.props.profile.instagram;
      var youtube = this.props.profile.youtube;
      var wikiaves = this.props.profile.wikiaves;
    }

    return (
      <div className="w-75">
        <div className="card">
          <img
            style={{ width: "100px", height: "100px", marginRight: "250px" }}
            src={profilepic}
            className="card-img-top rounded-circle  mx-auto mt-3"
            alt="my pic"
          />
          <div className="card-body">
            <h5 className="card-title">
              {first_name} {last_name}
            </h5>{" "}
            <p className="card-text">{city}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {isEmpty(email) ? null : (
                <i className="fas fa-envelope-square"> - {email} </i>
              )}
            </li>
            <li className="list-group-item">
              {isEmpty(wikiaves) ? null : (
                <i className="fas fa-crow"> - {wikiaves} </i>
              )}
            </li>
            <li className="list-group-item">
              {isEmpty(facebook) ? null : (
                <i className="fab fa-facebook"> - {facebook} </i>
              )}
            </li>
            <li className="list-group-item">
              {isEmpty(youtube) ? null : (
                <i className="fab fa-youtube"> - {youtube} </i>
              )}
            </li>
            <li className="list-group-item">
              {isEmpty(instagram) ? null : (
                <i className="fab fa-instagram"> - {instagram}</i>
              )}
            </li>
          </ul>
          <div className="card-body">
            {isEmpty(instagram || facebook || youtube || wikiaves) ? null : (
              <button
                type="button"
                className="btn btn-block btncustom"
                data-toggle="modal"
                data-target="#exampleModalScrollable"
              >
                Social Medias
              </button>
            )}
            <Link to="/edit-profile">
              <button type="button" className="btn btn-block btncustom">
                Edit Profile
              </button>
            </Link>

            <button
              type="button"
              className="btn btn-block btncustom"
              data-toggle="modal"
              data-target="#exampleModalScrollable"
            >
              View Social
            </button>

            <div
              className="modal fade"
              id="exampleModalScrollable"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalScrollableTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-scrollable"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="modal-title"
                      id="exampleModalScrollableTitle"
                    >
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio quasi doloremque temporibus alias nemo nostrum nulla
                    adipisci cum laboriosam minus. Aliquid suscipit hic ducimus
                    eaque ea. Similique reprehenderit officia voluptas! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                    dolorum soluta cupiditate odio similique minima asperiores
                    autem quia voluptas non, iure et natus ducimus id doloremque
                    dignissimos quos saepe at. lorem Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Dolorum, perferendis sequi
                    ipsa dolor iste alias totam odio libero aliquid ducimus,
                    provident maiores fugit ut. Sunt laboriosam temporibus amet
                    commodi debitis!
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btncustom">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.profiles.profile
});
export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(MyProfile);
