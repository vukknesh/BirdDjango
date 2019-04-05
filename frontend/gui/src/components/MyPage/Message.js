import React, { Component } from "react";
import MyContent from "./MyContent";
import Form from "./Form";

export default class Message extends Component {
  render() {
    return (
      <div className="w-100">
        <Form />
        <MyContent />
      </div>
    );
  }
}
