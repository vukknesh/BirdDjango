import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { addCommentPost } from "../../actions/comments";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      content: ""
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({
        errors: newProps.errors
      });
    }
  }
  onSubmit = e => {
    e.preventDefault();
    let type = "post";
    let slug = this.props.post.slug;
    let id = this.props.post.id;
    let content = this.state.content;
    let token = this.props.auth.token;
    const newComment = {
      content
    };
    this.props.addCommentPost(
      newComment,
      type,
      slug,
      id,
      token,
      this.props.history
    );
    this.setState({ content: "" });
  };
  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">
            Make a Comment...
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group d-flex">
                <input
                  className="w-75 p-2 mr-2"
                  placeholder="Comente aqui .."
                  name="content"
                  value={this.state.content}
                  onChange={this.handleChange}
                />
                <button type="submit" className="btn btn-dark btn-large w-25">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

CommentForm.propTypes = {
  addCommentPost: PropTypes.func.isRequired,

  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  post: state.posts.post
});
export default connect(
  mapStateToProps,
  { addCommentPost }
)(withRouter(CommentForm));
