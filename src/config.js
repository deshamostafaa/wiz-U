import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://wiz-u-social.herokuapp.com/api/",
});