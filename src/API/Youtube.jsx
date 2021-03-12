import axios from "axios";

const key = "AIzaSyB4tHsr-sIZfdQmkX4b06WQKCbbKSMzGvY";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3", 
    params: {
        part: "snippet",
        part:"statistics", 
        type: "video",
        chart: "mostPopular",
        maxResults: 5,
        key: key
    }
});

