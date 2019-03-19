import React, { Component } from "react";
import axios from "axios";

export default class GuideUser extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/users")
      .then(res => res.data)
      .then(data => {
        this.setState({
          users: data
        });
        console.log(this.state.users);
      });
  }
  render() {
    const { users } = this.state;
    let conteudo = users.map(user => (
      <div className="card" key={user.id}>
        <img
          src="https://www.altoastral.com.br/wp-content/uploads/2016/11/pessoa-assexuada.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">{user.email}</p>
          <a href="/login" className="btn btn-secondary btn-block">
            {user.id}
          </a>
        </div>
      </div>
    ));

    return <div className="container">{conteudo}</div>;
  }
}
