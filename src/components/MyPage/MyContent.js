import React, { Component, Fragment } from "react";
import { deletePost } from "../../actions/Post";

import { connect } from "react-redux";

import "./main.css";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";
import Spinner from "../common/Spinner";
import { getPosts } from "../../actions/Post";
import PropTypes from "prop-types";

export class MyContent extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired
  };
  componentWillMount() {
    this.props.getPosts();
  }
  render() {
    let content;
    if (this.props.posts === null || this.props.posts.isLoading) {
      content = <Spinner />;
    } else if (!isEmpty(this.props.myprofile)) {
      content = this.props.posts.map(post => (
        <div className="card-container" key={post.id}>
          <div className="card-head">
            <div>
              <Link to={`profilebyhandle/${post.user_id}/`}>
                <img src={post.user_image} alt="" />
              </Link>
            </div>
            <section>
              <span>
                <Link to={`profilebyhandle/${post.user_id}/`}>
                  {post.first_name} {post.last_name}
                </Link>
              </span>
              <p>{post.publish}</p>
            </section>
            {this.props.myprofile.id === parseInt(post.user_id, 10) ? (
              <div className=" ml-5">
                <button
                  onClick={this.props.deletePost.bind(
                    this,
                    post.id,
                    this.props.token
                  )}
                  className="btn btn-danger deletemsg ml-5"
                >
                  Deletar Post
                </button>
              </div>
            ) : null}
          </div>
          <div className="card-body">
            <Link to={`postByHandle/${post.id}/`}>
              <div className="content">
                <img src={post.image} alt="" />
                <p>{post.content}</p>
              </div>
            </Link>

            <div className="likes">
              <i className="far fa-thumbs-up" />
            </div>
          </div>
        </div>
      ));
    }

    return <Fragment>{content}</Fragment>;
  }
}

const mapStateToProps = state => ({
  newPost: state.posts.post,
  myprofile: state.profiles.myprofile,
  posts: state.posts.posts,
  token: state.auth.token
});

export default connect(
  mapStateToProps,
  { deletePost, getPosts }
)(MyContent);
