import React, { Component } from "react";

import { connect } from "react-redux";
// import { deleteComment } from "../../actions/Post";

class CommentItem extends Component {
  // onDeleteClick(postId, commentId) {
  //   this.props.deleteComment(postId, commentId);
  // }

  render() {
    const { auth, comment, postId } = this.props;
    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <p className="text-center">{comment.user.first_name}</p>
            <p className="text-center">{comment.user.last_name}</p>
          </div>
          <div className="col-md-10 d-flex">
            <p className="lead">{comment.content}</p>
            {comment.user.id === auth.user.id ? (
              <button
                // onClick={this.onDeleteClick.bind(this, postId)}
                type="button"
                className="btn btn-danger ml-5"
              >
                Deletar
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(CommentItem);
