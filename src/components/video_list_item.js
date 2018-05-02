import React from 'react';


const VideoListItem = (props) => {

  const video_thumbnail = props.video.snippet.thumbnails.default.url;
  const video_title = props.video.snippet.title
  //console.log(video_thumbnail);
  return (
      <li>
        <div className="video-list-item" onClick={() => props.onClick(props.video)}>
          <img className="videoThumbnail" src={video_thumbnail}></img>
          <div> {video_title} </div>
        </div>
      </li>

  );

};

export default VideoListItem;
