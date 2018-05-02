import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  //console.log(props.videos);

  const videoList = props.videos.map( (video) => {
    return(
      <VideoListItem
        video={video}
        key={video.id.videoId}
        onClick={props.onClick}
      />
    );
  });
  //console.log(videoList);

  return(
    <div>
      <ul className="video-list">
        {videoList}
      </ul>
    </div>
  );
};


export default VideoList;
