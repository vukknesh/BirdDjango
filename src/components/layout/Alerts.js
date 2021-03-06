import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
      if (error.msg.message)
        alert.error(`Message: ${error.msg.message.join()}`);
      if (error.msg.non_field_errors)
        alert.error(error.msg.non_field_errors.join());
      if (error.msg.username) alert.error(`${error.msg.username[0]}`);
      if (error.msg.title) alert.error(`Digite titulo para sua acomodação!`);
      if (error.msg.price) alert.error(`Digite um preço valido!`);
      if (error.msg.content)
        alert.error(`Menssagem precisa ter no min 10 caractéres!`);
    }

    if (message !== prevProps.message) {
      if (message.commentSucesso) alert.success(message.commentSucesso);
      if (message.productAdd) alert.success(message.productAdd);
      if (message.productDelete) alert.success(message.productDelete);
      if (message.hotelDelete) alert.success(message.hotelDelete);
      if (message.contactusError) alert.error(message.contactusError);
      if (message.contactus) alert.success(message.contactus);
      if (message.registerSuccess) alert.success(message.registerSuccess);
      if (message.hotelAdd) alert.success(message.hotelAdd);
      if (message.postSucesso) alert.success(message.postSucesso);
      if (message.campoLimpo) alert.error(message.campoLimpo);
      if (message.deletePost) alert.success(message.deletePost);
      if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
