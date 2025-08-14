import axios from 'axios';
import { configApp } from '@/configApp.js';

const backendApi = axios.create({
  baseURL: configApp.BACKEND_URL,
});



//Interceptors
backendApi.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `${token}`;
  }

  return config;
})

export { backendApi };