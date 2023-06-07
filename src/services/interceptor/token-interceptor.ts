import { loginKey } from "./../../utils/constants";
import axios from "axios";
import storage from "utils/storage";
const Axios = axios.create();
Axios.interceptors.request.use(
  (config: any) => {
    const token = storage.get(loginKey);

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default Axios;
