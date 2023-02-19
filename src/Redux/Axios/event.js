import axios from "axios";

export const event = axios.create({
  baseURL: "http://34.239.119.166/api/api/events",
});

// export const featuredCategory = axios.create({
//   baseURL: "http://localhost:8000/api/category/",
//   params: {featured: true}
// });
