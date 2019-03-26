import React, { Component } from "react";
import { addPost } from "../../actions/Post";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

class Message extends Component {
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
    this.props.addPost(newPost, token, this.props.history);
    this.setState({ content: "" });
  };

  render() {
    return (
      <div>
        <div className="card mb-3">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="input-group">
                <div className="input-group-prepend w-25">
                  <img
                    src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
                    alt="..."
                    className="w-100 h-100 rounded-circle"
                  />
                </div>
                <form noValidate onSubmit={this.onSubmit}>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    placeholder="What are you thikning?"
                    type="text"
                    name="content"
                    value={this.state.content}
                    onChange={this.onChange}
                  />
                  <input
                    type="submit"
                    className="btn btn-block mt-4"
                    style={colorPrimary}
                  />
                </form>
              </div>
            </li>

            <li className="list-group-item justify-content-center">
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
      </div>
    );
  }
}

const colorPrimary = {
  backgroundColor: "rgba(2, 206, 179, 0.7)",
  color: "white"
};

const mapStateToProps = state => ({
  auth: state.auth,
  token: state.auth.token
});

export default connect(
  mapStateToProps,
  { addPost }
)(withRouter(Message));
