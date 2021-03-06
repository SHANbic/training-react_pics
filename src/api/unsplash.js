import axios from "axios";
const KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      KEY
  }
});
