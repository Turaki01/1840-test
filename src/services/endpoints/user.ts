import Axios from "axios";
import { LoginInterface } from "interfaces/auth";

import { FEEDS_ENDPOINT, LOGIN_ENDPOINT } from "services/api/endpoints";
import { loginKey } from "utils/constants";
import storage from "utils/storage";

const HEADERS: any = {
  "Content-Type": "application/json"
};

const token = storage.get(loginKey);

if (token) {
  HEADERS.Authorization = `Bearer ${token}`;
}


// auth
export const loginService = (payload: LoginInterface) => {
  return Axios.post(LOGIN_ENDPOINT, payload, {
    headers: HEADERS
  });
};

// feeds
export const getFeedsService = () => {
  const params = {
    page: 1
  };
  return Axios.get(FEEDS_ENDPOINT, {
    params,
    headers: HEADERS
  });
};
