import axios from "axios";
// export const BASE_URL =
//   process.env.NODE_ENV !== "development"
//     ? "https://thankful-top-coat-toad.cyclic.app"
//     : "http://localhost:6002";
export const BASE_URL = "https://kind-jade-lovebird-kilt.cyclic.app";
export const serverInstance = axios.create({
  baseURL: `${BASE_URL}/`,
  // timeout : 3000,
});
//test purpose
