import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";
import { getPosts } from "../../actions/Post";

class MyContent extends Component {
  constructor() {
    super();
    this.state = {
      posts: null
    };
  }
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    let conteudo;

    if (this.props.posts === null) {
      conteudo = <Spinner />;
    } else {
      console.log(this.props.posts.results);
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
  posts: state.posts.posts
});

export default connect(
  mapStateToProps,
  { getPosts }
)(MyContent);
