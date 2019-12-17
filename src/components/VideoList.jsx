/* eslint-disable react/prop-types */
import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVidSelect }) => {
  const renderedList = videos.map(
    (video) => <VideoItem video={video} onVidSelect={onVidSelect} key={video.id.videoId} />,
  );
  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  );
};

export default VideoList;
