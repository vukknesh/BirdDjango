import React, { Component } from "react";
import MyContent from "./MyContent";
import Form from "./Form";
import { connect } from "react-redux";
import { getPosts } from "../../actions/Post";
import Spinner from "../common/Spinner";

class Message extends Component {
  componentWillMount() {
    this.props.getPosts();
  }
  render() {
    return (
      <div className="w-100">
        <Form />
        {this.props.posts ? (
          <MyContent
            isLoading={this.props.isLoading}
            posts={this.props.posts}
          />
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  posts: state.posts.posts,
  isLoading: state.posts.isLoading
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Message);
