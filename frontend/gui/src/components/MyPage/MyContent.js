import React, { Component } from "react";
import { getPosts, clearPosts } from "../../actions/Post";
import Spinner from "../common/Spinner";
import { connect } from "react-redux";
import pic from "./profile1.jpg";
import "./main.css";
import { Link } from "react-router-dom";

class MyContent extends Component {
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
      conteudo = this.props.posts.results.map(post => (
        <div className="card-container" key={post.id}>
          <div className="card-head">
            <div>
              <Link to={`profilebyhandle/${post.user_id}/`}>
                <img src={pic} alt="" />
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
              <img src={post.image} alt="" />
              <p>{post.content}</p>
            </div>

            <div className="likes">
              <i className="far fa-thumbs-up" />
              <p>3</p>
            </div>
          </div>
          <div className="card-comments">
            <img src={pic} alt="" />
            <form action="submit">
              <input type="text" />
              <i className="far fa-smile" />
              <button>Comentar</button>
            </form>
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
