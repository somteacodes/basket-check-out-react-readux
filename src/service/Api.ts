import axios from "axios";
export const url = 'http://localhost:9001';

export default axios.create({
    baseURL:url
})