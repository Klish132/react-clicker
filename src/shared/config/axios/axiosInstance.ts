import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://192.168.0.237:6891",
    timeout: 1000
})