// src/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://your-django-backend.com/api',
});

// Add a request interceptor to include the token
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;