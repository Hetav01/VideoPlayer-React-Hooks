import React from 'react';

const VideoPlayer = ({video}) => {
    
    if (!video) {
        return (
            <div>Loading...</div>
        );
    };
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(video);
    return (
        <div>
            <div className="videoFrame">
                <iframe src={videoSrc} title="videoPlayer"></iframe>
            </div>
            <div className="videoDetails">
                <h4 className="videoTitle">{video.snippet.title}</h4>
                <div className="description">{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoPlayer;