import http from "./httpServices";
import config from "../config.json";

export function getGenres() {
  return http.get(config.apiUrl + "/genres");
  //return http.get("http://localhost:3900/api/genres");
}

// import http from "./httpServices";
// import apiUrl  from "../config.json";

// export function getGenres() {
//   return http.get(apiUrl + "/genres");
// }
