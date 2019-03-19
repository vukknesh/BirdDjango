import React, { Component } from "react";
import axios from "axios";
import Spinner from "../common/Spinner";

export default class MyContent extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.data)
      .then(data => {
        this.setState({ posts: data });
      });
  }
  handleDelete = id => {
    this.setState({
      posts: this.state.posts.filter(post => post.id !== id)
    });
  };
  render() {
    const { posts } = this.state;
    let conteudo;

    if (posts === null) {
      conteudo = <Spinner />;
    } else {
      conteudo = posts.map(post => (
        <div key={post.id} className="card mb-3">
          <div className="card-header">{post.title}</div>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            <button
              onClick={this.handleDelete.bind(this, post.id)}
              className="btn btn-danger"
            >
              {" "}
              delete
            </button>
          </div>
        </div>
      ));
    }

    return <div>{conteudo}</div>;
  }
}
