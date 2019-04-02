import React, { Component } from "react";
import { addPost } from "../../actions/Post";

import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import MyContent from "./MyContent";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      post: ""
    };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();

    const newPost = this.state.content;
    // let id = this.props.user.id;
    let token = this.props.token;
    this.props.addPost(newPost, token);
    this.setState({ content: "" });
  };

  render() {
    if (this.props.profile) {
      var image = this.props.profile.image;
    }
    return (
      <div className="w-100">
        <div className="card shadow-lg mb-3 ">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="input-group">
                <div className="input-group-prepend w-25  align-items-center justify-content-center">
                  <img
                    src={image}
                    alt="..."
                    className="rounded-circle"
                    style={{ width: "75px", height: "75px" }}
                  />
                </div>
                <form
                  noValidate
                  className=" w-75 d-flex"
                  onSubmit={this.onSubmit}
                >
                  <textarea
                    className="form-control w-100"
                    placeholder="What are you thikning?"
                    type="text"
                    name="content"
                    value={this.state.content}
                    onChange={this.onChange}
                  />
                  <input
                    type="submit"
                    className="btn btn-block ml-5 w-50 btncustom"
                  />
                </form>
              </div>
            </li>

            <li className="list-group-item d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-light  border rounded-pill w-25"
              >
                Photo/Video
              </button>
              <button
                type="button"
                className="btn btn-light border rounded-pill w-25"
              >
                Gif
              </button>
              <button
                type="button"
                className="btn btn-light border rounded-pill w-25"
              >
                Emoji
              </button>
            </li>
          </ul>
        </div>

        <MyContent />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  token: state.auth.token,
  profile: state.profiles.profile
});

export default connect(
  mapStateToProps,
  { addPost }
)(withRouter(Message));
