import React, { Component } from "react";
import MyContent from "./MyContent";
import Form from "./Form";

class Message extends Component {
  render() {
    return (
      <div className="w-100">
        <Form />

        <MyContent />
      </div>
    );
  }
}

export default Message;
