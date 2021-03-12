import React from 'react';
import "../style/videoItem.css";

const VideoItem = ({video, onVideoSelect}) => {
    
    return (
        <div className="videoItem">
            <img width="220" height="120" onClick={() => onVideoSelect(video)} src={video.snippet.thumbnails.medium.url}></img>
            <div className="content">
                <div className="snippetTitle">{video.snippet.title}</div>
                <div className="channelName">{video.snippet.channelTitle}</div>
            </div>
        </div>
    );
};

export default VideoItem;