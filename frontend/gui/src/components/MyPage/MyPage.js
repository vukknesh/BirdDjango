import React, { Component } from "react";
import MyMenu from "./MyMenu";

import RigthMenu from "./RigthMenu";
import Middle from "./Middle";

class MyPage extends Component {
  componentWillMount() {}

  render() {
    return (
      <div style={pageStyle} className="mt-3  bg-light">
        <div className="row h-100">
          <div className="w-25">
            <MyMenu />
          </div>
          <div className="w-50">
            <Middle />
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
