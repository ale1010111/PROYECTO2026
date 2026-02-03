// src/api/axios.ts
import axios from 'axios';
// Agregamos la palabra 'type' antes de la interfaz
import type { InternalAxiosRequestConfig } from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('access');
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;