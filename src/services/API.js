import axios from "axios";
import queryString from "query-string";

const axiosInstance = axios.create({
  baseURL: "https://chotot.herokuapp.com/api/v1",
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (config.url) {
      // append key
      config.url = queryString.stringifyUrl({
        url: config.url,
      });
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
