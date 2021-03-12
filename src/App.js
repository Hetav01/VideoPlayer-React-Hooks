import React, {useState} from 'react';
import Header from "./components/Header";
import SearchBar from './components/SearchBar';
import Youtube from "./API/Youtube";
import VideoPlayer from './components/VideoPlayer';

const App = () => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const searchYoutube = async(videoName) => {
        const response = await Youtube.get("/search", "/videos", {
            params: {
                q: videoName
            }
        });
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
        console.log(response.data.items);

    };
    
    return (
        <div>
            <Header  />
            <SearchBar onFormSubmit={searchYoutube} />
            <VideoPlayer video={selectedVideo} />
        </div>
    );
};

export default App;

//what will be the components to be included in the video player?
    /*
        1. header 
            a. left side name of the video player. (VidViews)
            b. right side my github page link.
        2. Searchbar
        3. Video Player
            a. it will contain the videoplayer.
            b. also the view count and the name of the video on the bottom.
        4. Video List
        5. VideoItem (part of the video list)
    
    */