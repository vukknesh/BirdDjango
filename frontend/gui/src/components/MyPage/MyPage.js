import React, { Component } from "react";
import MyMenu from "./MyMenu";
import MyContent from "./MyContent";
import RigthMenu from "./RigthMenu";
import Message from "./Message";

class MyPage extends Component {
  componentWillMount() {}

  render() {
    return (
      <div style={pageStyle} className="mt-3  bg-light">
        <div className="row h-100">
          <div className="w-25">
            <MyMenu profile={this.props.profile} />
          </div>
          <div className="w-50">
            <Message />
            <MyContent />
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

const mapStateToProps = state => ({
  auth: state.auth
});

export default MyPage;
