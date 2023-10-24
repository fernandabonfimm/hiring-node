import axios, { AxiosInstance } from 'axios';

const TIMEOUT_IN_SECONDS = 30;
const BASE_URL = 'http://localhost:3010/';

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT_IN_SECONDS * 1000,
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
  },
});

export default api;
