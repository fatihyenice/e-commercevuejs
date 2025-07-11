import axios from "axios"

export const app = axios.create({
    baseURL: "https://e-commercevuejs.onrender.com",
    withCredentials: true
})