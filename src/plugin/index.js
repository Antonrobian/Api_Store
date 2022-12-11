import axios from "axios";
const instance = axios.create({
  baseURL: "https://market-final-project.herokuapp.com",
});
export { instance };
