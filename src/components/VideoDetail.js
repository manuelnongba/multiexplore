import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="Video Detail" src={videoSrc} allow=" autoplay;"></iframe>
      </div>
      <div style={{ backgroundColor: "black" }} className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p style={{ color: "white" }}>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
