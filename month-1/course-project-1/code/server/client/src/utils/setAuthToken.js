import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    // if there is no token or the token is invalid, delete the header
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;