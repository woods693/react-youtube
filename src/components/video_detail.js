import React from 'react';

const VideoDetail = (props) => {

  if (!props.current){
    return(
        <div> Still Loading!..</div>
    );
  } ;

  const videoURL = 'https://www.youtube.com/embed/' + props.current.id.videoId;
  return(
    <div>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoURL}/>
        <iframe width="560" height="315" src={videoURL} frameBorder="0" allowFullScreen/>
      </div>
      <div className="video-description">
        <h3>{props.current.snippet.title}</h3>
        <hr/>
        <h5>{props.current.snippet.channelTitle}</h5>
      </div>
    </div>
    );
};


export default VideoDetail;
