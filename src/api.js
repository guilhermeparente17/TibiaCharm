import axios from "axios";

const api = axios.create({
  baseURL: "https://tibiawiki.dev/api",
  headers: {},
});

export default api;
