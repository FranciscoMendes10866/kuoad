import axios from "axios";

export default axios.create({
  baseURL: "https://pixabay.com/api",
  params: {
    key: import.meta.env.VITE_APP_API_KEY,
    per_page: 4,
  },
});
