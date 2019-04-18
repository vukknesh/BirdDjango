import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PostItem from "../Posts/PostItem";
import CommentForm from "../Post/CommentForm";
import Spinner from "../common/Spinner";
import { getPost } from "../../actions/Post";
import { Link, Redirect } from "react-router-dom";
import CommentFeed from "./CommentFeed";
import isEmpty from "../../validation/is-empty";

class Post extends Component {
  componentWillMount() {
    this.props.getPost(this.props.match.params.id);
  }
  render() {
    if (isEmpty(this.props.token) || isEmpty(this.props.post)) {
      return <Redirect to="/login" />;
    }
    let postContent;
    if (isEmpty(this.props.post)) {
      postContent = <Spinner />;
    } else {
      console.log(this.props.post);
      postContent = (
        <div>
          <PostItem post={this.props.post} />
          <CommentForm postId={this.props.post.id} />
          <CommentFeed
            postId={this.props.post.id}
            comments={this.props.post.comments}
          />
        </div>
      );
    }
    return (
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/my-page" className="btn btn-ligth mb-3">
                Back to Feed
              </Link>
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  post: state.posts.post,
  token: state.auth.token
});
export default connect(
  mapStateToProps,
  { getPost }
)(Post);
