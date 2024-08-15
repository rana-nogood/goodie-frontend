import axios from "axios";
export const API_URL = "http://localhost:8000";
export const ML_API_URL = "https://goodie-ml-blog.vercel.app";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
  },
});

export const ml_api = axios.create({
  baseURL: ML_API_URL,
  headers: {
    Accept: "application/json",
  },
});
