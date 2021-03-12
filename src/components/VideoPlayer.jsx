import React from 'react';
import "../style/VideoPlayer.css";

const VideoPlayer = ({video}) => {
    
    if (!video) {
        return (
            <div className="loadingDiv">Loading...</div>
        );
    };
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(video);
    return (
        <div className="videoPlayer">
            <div className="videoFrame">
                <iframe width="940" height="450" frameBorder="0" src={videoSrc} title="videoPlayer"></iframe>
            </div>
            <div className="videoDetails">
                <h4 className="videoTitle">{video.snippet.title}</h4>
                <div className="description">{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoPlayer;