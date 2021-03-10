import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import SearchBar from './components/SearchBar';
import Youtube from "./API/Youtube";

const App = () => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const searchYoutube = async(videoName) => {
        const response = await Youtube.get("/search", {
            params: {
                q: videoName
            }
        });
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };

    return (
        <div>
            <Header  />
            <SearchBar onFormSubmit={searchYoutube} />
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