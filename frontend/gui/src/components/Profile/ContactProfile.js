import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addCommentProfile } from "../../actions/comments";

class ContactProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      content: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();
    let type = "profile";
    let slug = this.props.profile.slug;
    let id = this.props.profile.id;
    let content = this.state.content;
    let token = this.props.token;
    const newComment = {
      content
    };
    this.props.addCommentProfile(
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
    const { first_name, last_name, email, about_you } = this.props.profile;
    return (
      <div>
        {this.props.profile ? (
          <div>
            <div className="text-center">
              <h1>Contato</h1>
            </div>
            <div className="mt-5">
              <p>{email}</p>
              <p>{about_you}</p>
              <hr />
              <h4 className="text-center">Sobre {first_name}:</h4>
              <p className="mt-5">{about_you}</p>
            </div>
            <div className="mb-5">
              <form onSubmit={this.onSubmit}>
                <input
                  type="text"
                  placeholder={`Comente sobre ${first_name}`}
                  name="content"
                  onChange={this.handleChange}
                  className="w-75"
                />
                <input type="submit" className="w-25" />
              </form>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profiles.profile,
  token: state.auth.token
});
export default connect(
  mapStateToProps,
  { addCommentProfile }
)(withRouter(ContactProfile));
