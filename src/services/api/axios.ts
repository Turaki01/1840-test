import axios from "axios";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.interceptors.response.use((response) => {
    // if we are appending authorization headers
  let token = response.headers["authorization"];
  if (token == null) {
    return response;
  }

  return response;
});

export default axios;
