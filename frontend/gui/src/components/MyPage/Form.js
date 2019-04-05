import React, { Component } from "react";

import { addPost } from "../../actions/Post";

import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

export class Form extends Component {
  state = {
    content: ""
  };

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
    const { content } = this.state;
    return (
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
                  value={content}
                  onChange={this.onChange}
                />
                <input
                  type="submit"
                  className="btn btn-block ml-5 w-50 btncustom"
                />
              </form>
            </div>
          </li>
        </ul>
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
)(withRouter(Form));
