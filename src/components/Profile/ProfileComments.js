import React, { Component } from "react";
import { connect } from "react-redux";
import isEmpty from "../../validation/is-empty";
import { Link } from "react-router-dom";

class ProfileComments extends Component {
  render() {
    let comments;

    if (!isEmpty(this.props.comments)) {
      comments = this.props.comments.map(comment => (
        <div key={comment.id} className="comment-card">
          <Link to={`/profilebyhandle/${comment.user.id}/`}>
            <h4>
              {comment.user.first_name} {comment.user.last_name}
            </h4>
          </Link>
          <small>{comment.timestamp}</small>

          <hr />
          <p>{comment.content}</p>
        </div>
      ));
    } else {
      return <div>No comments yet</div>;
    }
    return (
      <div className="text-center">
        <h2>Comentarios</h2>
        {comments}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  comments: state.profiles.profile.comments
});
export default connect(mapStateToProps)(ProfileComments);
