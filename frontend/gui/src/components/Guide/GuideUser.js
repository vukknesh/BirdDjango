import React, { Component } from "react";
import profilepic from "../MyPage/profile1.jpg";
import { getProfiles } from "../../actions/profile";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";

class GuideUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: []
    };
  }
  componentDidMount() {
    this.props.getProfiles();
    this.setState({
      profiles: this.props.profiles
    });
  }
  render() {
    if (this.props.isLoading) {
      var conteudo = <Spinner />;
    } else {
      if (this.state.profiles) {
        var conteudo = this.state.profiles.map(profile => (
          <div className="card shadow m-4 w-25" key={profile.id}>
            <img src={profilepic} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{profile.name}</h5>
              <p className="card-text">{profile.email}</p>
              <p className="card-text">{profile.date_joined}</p>

              <a href="/login" className="btn btn-secondary btn-block">
                {profile.id}
              </a>
            </div>
          </div>
        ));
      }
    }

    return <div className="container d-flex flex-wrap">{conteudo}</div>;
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  profiles: state.profiles.profiles,
  isLoading: state.profiles.loading
});

export default connect(
  mapStateToProps,
  {
    getProfiles
  }
)(GuideUser);
