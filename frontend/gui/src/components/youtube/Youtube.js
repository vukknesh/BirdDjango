import React, { Component } from "react";
import SearchBar from "./search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./video_list";
import VideoDetail from "./video_detail";
import "./youtube.css";
import { connect } from "react-redux";

const API_KEY = "AIzaSyBQ-JHAdkRpnFIUlQekQUrn4UHCwQfVucw";

class Youtube extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    console.log(this.props.youtube);
    this.videoSearch(`birds`);
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
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={userSelected =>
            this.setState({ selectedVideo: userSelected })
          }
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default connect(null)(Youtube);
