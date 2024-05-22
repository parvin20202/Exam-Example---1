import axios from "axios";
import { BASE_URL } from "./constant";

export async function getAllData() {
  const response = await axios(`${BASE_URL}/courses`);
  return response;
}
export async function getDataById(id) {
  const response = await axios(`${BASE_URL}/courses/${id}`);
  return response;

}
