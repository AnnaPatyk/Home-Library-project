import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:4000/",
});

export const httpImg = "http://localhost:4000/uploads/";
