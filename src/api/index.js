import axios from "axios";

const instanse = axios.create({ baseURL: process.env.REACT_APP_API })

const getPosts = () => instanse.get("/posts");

const api = {
    getPosts,
}

export default api;