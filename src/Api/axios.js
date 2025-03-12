// axios-Promise based HTTP client for the browser and node.js
import axios from "axios";

const axiosInstance = axios.create({

  //local instance of firebase function
  // baseURL: "http://127.0.0.1:5001/clone-3dd35/us-central1/api", // means concatinate or add /payment/create from payment folder from the base URL

  //deployed version if firebase function?

  //deployed version of amazon server on render.com
  baseURL: "https://amazon-api-deploy-1-zpbn.onrender.com/",
});

export { axiosInstance };
