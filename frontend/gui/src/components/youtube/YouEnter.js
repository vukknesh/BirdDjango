import React, { Component } from "react";
import Youtube from "./Youtube";
import { connect } from "react-redux";

class YouEnter extends Component {
  state = {
    youtube: ""
  };

  componentWillMount() {
    this.setState({ youtube: this.props.profile.youtube });
  }
  componentDidMount() {
    this.setState({
      youtube: this.props.profile.youtube
    });
  }

  render() {
    return (
      <div>
        <Youtube youtube={this.state.youtube} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profiles.profile
});
export default connect(mapStateToProps)(YouEnter);
