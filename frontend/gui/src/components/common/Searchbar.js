import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    search: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    console.log(this.state.search);
  };

  render() {
    return (
      <div className="container mt-5 mb-5">
        <form action="search" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Procure seu guia por cidade"
            name="search"
            className="w-75 p-2 rounded"
            onChange={this.onChange}
          />

          <button type="submit" className="w-25 p-2  btn-info rounded">
            Procurar
          </button>
        </form>
      </div>
    );
  }
}

export default Searchbar;
