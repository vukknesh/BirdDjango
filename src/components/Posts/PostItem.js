import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { deletePost } from "../../actions/Post";

class PostItem extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  render() {
    const { post, auth } = this.props;

    return (
      <div className="card card-body mb-3">
        <div className="row d-flex">
          <div className="col-md-2">
            <h4>{post.user.first_name}</h4>
            <p>{post.user.last_name}</p>
          </div>
          <div className="col-md-10">
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { deletePost }
)(PostItem);
