import axios from 'axios';

const API_URL = process.env.NX_API_URL;

const instance = axios.create({
  baseURL: API_URL,
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem('accessToken'));
    if (token) {
      config.headers.Authorization = `Bearer ${token.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
