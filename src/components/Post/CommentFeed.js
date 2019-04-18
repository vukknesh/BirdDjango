import React, { Component } from "react";

import CommentItem from "./CommentItem";

class CommentFeed extends Component {
  render() {
    const { comments, postId } = this.props;
    if (postId) {
      return comments.map(comment => (
        <CommentItem key={comment.id} comment={comment} postId={postId} />
      ));
    } else {
      return null;
    }
  }
}

export default CommentFeed;
