import React, { Component } from "react";
import SearchBar from "./search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./video_list";
import VideoDetail from "./video_detail";
import { connect } from "react-redux";
import "./youtube.css";

const API_KEY = "AIzaSyBQ-JHAdkRpnFIUlQekQUrn4UHCwQfVucw";

class Youtube extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch(`${this.props.profile.youtube}`);
    if (this.props.profile.youtube) {
      this.videoSearch(this.props.profile.youtube);
    }
  }

  componentWillReceiveProps(nextProps) {
    // Any time props.email changes, update state.
    if (nextProps.profile.youtube !== this.props.profile.youtube) {
      this.videoSearch(`${nextProps.profile.youtube}`);
    }
  }

  videoSearch(searchTerm) {
    YTSearch({ key: API_KEY, term: searchTerm }, data => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}
        />
        <div className="d-flex">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={userSelected =>
              this.setState({ selectedVideo: userSelected })
            }
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profiles.profile
});
export default connect(mapStateToProps)(Youtube);
