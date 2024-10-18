import axios from "axios";

const BaseUrl = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_BACKEND_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default BaseUrl;
