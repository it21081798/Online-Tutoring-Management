import Axios from "axios";
// import auth from "./authService";
import { toast } from "react-toastify";

Axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Logging the error", error);
    toast.error("An unexpected error occured.");
  }
  return Promise.reject(error);
});

function setJwt(jwt) {
  Axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: Axios.get,
  post: Axios.post,
  put: Axios.put,
  delete: Axios.delete,
  setJwt,
};
