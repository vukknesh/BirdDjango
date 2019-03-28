import React, { Component } from "react";
import { getPosts, clearPosts } from "../../actions/Post";
import Spinner from "../common/Spinner";
import { connect } from "react-redux";

class MyContent extends Component {
  state = {
    posts: []
  };
  componentWillMount() {
    this.props.getPosts();
    this.setState({ posts: this.props.posts });
  }

  componentWillUnmount() {
    this.props.clearPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.results.unshift(nextProps.newPost);
    }
  }

  render() {
    let conteudo;

    if (this.props.posts === null) {
      conteudo = <Spinner />;
    } else {
      conteudo = this.props.posts.results.map(post => (
        <div key={post.id} className="card mb-3">
          <div className="card-header">{post.username}</div>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            <p className="card-text">{post.publish}</p>
          </div>
        </div>
      ));
    }

    return <div>{conteudo}</div>;
  }
}
const mapStateToProps = state => ({
  posts: state.posts.posts,
  newPost: state.posts.post
});

export default connect(
  mapStateToProps,
  { getPosts, clearPosts }
)(MyContent);
