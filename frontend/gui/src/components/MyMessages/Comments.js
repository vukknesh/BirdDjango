import React, { Component } from "react";
import { getComments } from "../../actions/comments";
import Spinner from "../common/Spinner";
import { connect } from "react-redux";

import "../MyPage/main.css";
import { Link } from "react-router-dom";

class Comments extends Component {
  componentWillMount() {
    this.props.getComments();
  }

  render() {
    let conteudoA;

    if (this.props.comments === null) {
      conteudoA = <Spinner />;
    } else {
      conteudoA = this.props.comments.map(comment => {
        console.log(comment.user.id);
        if (comment.user.id == this.props.user.id) {
          return (
            <div className="card-container" key={comment.id}>
              <div className="card-head">
                <div>
                  <img src={this.props.myprofile.image} alt="" />
                </div>
                <section>
                  <span>
                    {comment.user.first_name} {comment.user.last_name}
                  </span>
                </section>
              </div>
              <div className="card-body">
                <div className="content-hotel">
                  <p>{comment.content}</p>
                </div>

                <div>
                  <button className="edit-btn">Editar</button>
                </div>
              </div>
            </div>
          );
        }
      });
    }

    return <div className="d-flex flex-wrap w-100">{conteudoA}</div>;
  }
}
const mapStateToProps = state => ({
  user: state.auth.user,
  comments: state.comments.comments,
  myprofile: state.profiles.myprofile
});

export default connect(
  mapStateToProps,
  { getComments }
)(Comments);
