// axios-Promise based HTTP client for the browser and node.js
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://amazon-api-deploy-5y37.onrender.com",
});


export { axiosInstance };
