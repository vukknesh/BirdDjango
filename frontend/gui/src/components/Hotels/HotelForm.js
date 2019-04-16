import React, { Component } from "react";
import { addComment } from "../../actions/comments";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./main.css";

export class HotelForm extends Component {
  state = {
    content: ""
  };

  onSubmit = e => {
    e.preventDefault();
    let type = "hotel";
    let slug = this.props.hotel.slug;
    let id = this.props.hotel.id;
    let content = this.state.content;
    let token = this.props.token;
    const newComment = {
      content
    };
    this.props.addComment(
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
    if (this.props.profile) {
      var image = this.props.profile.image;
    }
    const { content } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Comente aqui sua exp"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <input type="submit" className="btn btn-block btn-info mb-5" />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  token: state.auth.token,
  hotel: state.hotels.hotel
});

export default connect(
  mapStateToProps,
  { addComment }
)(withRouter(HotelForm));
