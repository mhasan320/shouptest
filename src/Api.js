import axios from "axios";

export default axios.create({
    baseURL: "https://api.giphy.com/v1/gifs/search?api_key=QiTwp1TBJAPy26Mi9NunGGjLodihEJLW&q=random&limit=25&offset=0&rating=g&lang=en",
  });