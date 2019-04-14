import React, { Component } from "react";
import TextFieldGroup from "../../common/TextFieldGroup";
import axios from "axios";
import { createMessage } from "../../../actions/messages";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Contactus extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    reason: "",
    message: ""
  };
  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    let menssagem = this.state;
    if ((name, email, message)) {
      axios.post(`http://localhost:8000/api/contactus/create/`, menssagem);
      this.props.createMessage({ contactus: "Menssagem enviada com sucesso!" });
      this.props.history.push("/");
    } else {
      this.props.createMessage({
        contactusError: "Algum campo nao preenchido!"
      });
    }

    this.setState({
      name: "",
      email: "",
      subject: "",
      reason: "",
      message: ""
    });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Contato</h1>

            <p>
              Entre em contato conosco para enviar dúvidas, críticas, sugestões,
              informar problemas técnicos e denunciar abusos de usuário.
              Responderemos o mais rapidamente possível.
            </p>
            <p className="lead">Nome</p>
            <form noValidate onSubmit={this.onSubmit}>
              <TextFieldGroup
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
                // error={errors.email}
              />
              <p className="lead">Email</p>
              <TextFieldGroup
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                // error={errors.password}
                type="email"
              />
              <p className="lead">Referente</p>
              <TextFieldGroup
                type="text"
                name="subject"
                value={this.state.subject}
                onChange={this.onChange}
                // error={errors.name}
              />
              <p className="lead">Motivo</p>
              <TextFieldGroup
                type="text"
                name="reason"
                value={this.state.reason}
                onChange={this.onChange}
                // error={errors.name}
              />
              <p className="lead">Menssagem</p>
              <TextFieldGroup
                type="text"
                name="message"
                value={this.state.message}
                onChange={this.onChange}
                // error={errors.name}
              />

              <input type="submit" className="edit-btn" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { createMessage }
)(Contactus);
