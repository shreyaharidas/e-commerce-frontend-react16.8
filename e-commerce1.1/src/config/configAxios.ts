import axios from 'axios';

// Create a custom Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your API base URL
});

export  default axiosInstance;