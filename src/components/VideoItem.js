import './VideoItem.css';
import React from 'react';

const VideoItem = (props) => {

    const onVideoSelect = (video) => {

        props.onVideoSelect(video);
    }

   return (
        <div onClick={() => onVideoSelect(props.video)} className="video-item item">
    <img alt={props.video.snippet.title}
             className="ui image" 
             src={props.video.snippet.thumbnails.medium.url}/>
            
            <div className="content">
                <div className="header">
                    {props.video.snippet.title}
                </div>
            </div>            
        </div> 
    )
}

export default VideoItem;