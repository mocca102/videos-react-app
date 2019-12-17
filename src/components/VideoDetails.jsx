/* eslint-disable react/prop-types */
import React from 'react';

const VideoDetails = ({ video }) => {
  if (video) {
    return (
      <div>
        <div className="ui embed">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.snippet.title}
          />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{ video.snippet.title }</h4>
          <p>{ video.snippet.description }</p>
        </div>
      </div>
    );
  }
  return <div>Loading...</div>;
};

export default VideoDetails;
