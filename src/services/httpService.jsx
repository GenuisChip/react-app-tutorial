import axios from "axios";
import config from "../config/config.json";
const apiUrl = config.apiUrl;

// interceptors for all requests and responses
axios.interceptors.response.use((response) => {
  console.log("Logging response", response);
  return response;
});

function get(url) {
  return axios.get(apiUrl + url);
}

function post(url, data) {
  return axios.post(apiUrl + url, data);
}

function put(url, data) {
  return axios.put(apiUrl + url, data);
}

function del(url) {
  return axios.delete(apiUrl + url);
}

export default {
  get: get,
  post: post,
  put: put,
  del: del,
};
