import axios from "axios";

const API_KEY = "79e63265a2cd89929fd7205ed6164962";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY
  }
});

export default tmdb;
