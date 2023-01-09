import http from "./httpServices";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/users/enroll";

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export async function getCourse(id) {
  return await http.get(config.apiUrl + `/users/getuser/${id}`);
}

export async function saveEnrollment(id, course) {
  return await http.post(movieUrl(id), course);
}

export async function UnEnroll(id, course) {
  return await http.delete(movieUrl(id), course);
}
