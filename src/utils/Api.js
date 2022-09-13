import axios from "axios";
import authService from "./Auth";

const Api = axios.create({
  baseURL:
    process.env.REACT_APP_BASE_API_URL ||
    "https://api.mipadevent.prunedge.org/api/v1",
});

Api.interceptors.request.use(
  (config) => {
    if (authService.isAuthenticated() === true) {
      config.headers.common[
        "Authorization"
      ] = `Bearer ${authService.getToken()}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default Api;
