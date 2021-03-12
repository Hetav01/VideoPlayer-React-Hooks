import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    
    return (
        <div className="videoItem">
            <img onClick={() => onVideoSelect(video)} src={video.snippet.thumbnails.medium.url}></img>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
                <div className="channelName">{video.snippet.channelTitle}</div>
            </div>
        </div>
    );
};

export default VideoItem;