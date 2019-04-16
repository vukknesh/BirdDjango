import React, { Component } from "react";
import { connect } from "react-redux";
import isEmpty from "../../validation/is-empty";

class ProfileComments extends Component {
  render() {
    console.log(this.props.comments);
    let comments;

    if (!isEmpty(this.props.comments)) {
      console.log(comments);
      comments = this.props.comments.map(comment => (
        <div key={comment.id} className="comment-card">
          <h4>
            {comment.user.first_name} {comment.user.last_name}
          </h4>
          <hr />
          <p>{comment.content}</p>
        </div>
      ));
    } else {
      return <div>No comments yet</div>;
    }
    return <div>{comments}</div>;
  }
}
const mapStateToProps = state => ({
  comments: state.profiles.profile.comments
});
export default connect(mapStateToProps)(ProfileComments);
