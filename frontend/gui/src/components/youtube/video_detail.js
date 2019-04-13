import React from "react";
import "./youtube.css";

const VideoDetail = props => {
  const video = props.video;

  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail  col-md-8">
      <div className="embed-responsive embed-responsive-16by9 mb-2">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
