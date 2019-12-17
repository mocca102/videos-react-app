/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';

const VideoItem = ({ video, onVidSelect }) => (
  <div
    onClick={() => onVidSelect(video)}
    className="item"
    style={{ cursor: 'pointer' }}
  >
    <div>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.thumbnails.title}
      />
    </div>
    <div className="content">
      <div className="header">{video.snippet.title}</div>
      <div className="description">{video.snippet.channelTitle}</div>
    </div>
  </div>
);

export default VideoItem;
