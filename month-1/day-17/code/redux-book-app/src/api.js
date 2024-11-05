// api.js
import axios from "axios";
// use .env file to store the API key
const API_KEY = "AIzaSyAi0FKdJyYOhnvohyn2d8Z34wvIjAQhyjY";

const api = axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
});

export const searchBooks = (query) =>
  api.get(`/volumes?q=${query}&key=${API_KEY}`);

export default api;
