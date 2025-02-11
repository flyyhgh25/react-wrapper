import axios from "axiios"
const customFetch = axios.create({
  baseURL: "http://localhost:5000/api/task",
  headers: {
    Accept: "application/json",
  },
});
export default customFetch
