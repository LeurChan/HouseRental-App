import axios from 'axios';

const API_URL = 'http://192.168.0.7:8000/api'; 

const client = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export default client;