import React, { Component } from "react";
import { getProfilesByCity } from "../../actions/profile";
import { connect } from "react-redux";
class Searchbar extends Component {
  state = {
    city: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.getProfilesByCity(this.state.city);
  };

  render() {
    return (
      <div className="container mt-5 mb-5">
        <form action="search" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Procure seu guia por cidade"
            name="city"
            className="w-75 p-2 rounded"
            onChange={this.onChange}
          />

          <button type="submit" className="w-25 btn p-2 btncustom">
            Procurar
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});

export default connect(
  mapStateToProps,
  { getProfilesByCity }
)(Searchbar);
