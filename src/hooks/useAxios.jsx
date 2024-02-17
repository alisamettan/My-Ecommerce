import axios from "axios";

const baseUrl = "https://workintech-fe-ecommerce.onrender.com";

export const instance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});
