import React, { Component } from "react";
import MyProfile from "./MyProfile";
import "./main.css";
import RigthMenu from "./RigthMenu";
import Message from "./Message";

class MyPage extends Component {
  componentWillMount() {}

  render() {
    return (
      <div style={pageStyle} className="mt-3  bg-light pb-5">
        <div className="row h-100 ">
          <div className="w-25 d-flex justify-content-center">
            <MyProfile />
          </div>
          <div className="w-50 d-flex justify-content-center ">
            <Message profile={this.props.profile} />
          </div>
          <div className="w-25">
            <RigthMenu />
          </div>
        </div>
      </div>
    );
  }
}

const pageStyle = {
  height: "100%",
  width: "100%"
};

export default MyPage;
