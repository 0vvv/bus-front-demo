import axios from 'axios'
import router from "@/router";

const request = axios.create({
    baseURL: "/api",
    timeout: 5000
})


export default request

