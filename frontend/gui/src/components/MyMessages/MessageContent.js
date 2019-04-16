import React, { Component } from "react";
import { getPosts, clearPosts, deletePost } from "../../actions/Post";
import Spinner from "../common/Spinner";
import { connect } from "react-redux";

import "../MyPage/main.css";
import { Link } from "react-router-dom";

class MessageContent extends Component {
  componentWillMount() {
    this.props.getPosts();
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
      conteudo = this.props.posts.map(post => {
        if (post.user_id == this.props.user.id) {
          return (
            <div className="card-container" key={post.id}>
              <div className="card-head">
                <div>
                  <Link to={`profilebyhandle/${post.user_id}/`}>
                    <img src={this.props.myprofile.image} alt="" />
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
              </div>
              <div className="card-body">
                <div className="content">
                  <p>{post.content}</p>
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
              </div>
            </div>
          );
        }
      });
    }

    return <div className="d-flex flex-wrap w-100">{conteudo}</div>;
  }
}
const mapStateToProps = state => ({
  user: state.auth.user,
  posts: state.posts.posts,
  myprofile: state.profiles.myprofile,
  token: state.auth.token
});

export default connect(
  mapStateToProps,
  { getPosts, clearPosts, deletePost }
)(MessageContent);
