import axios from 'axios';

const api = axios.create({
    baseURL: "http://c3cc64bf.ngrok.io"
});

export default api;