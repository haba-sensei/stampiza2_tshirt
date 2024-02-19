import axios from 'axios';

const axiosInstance = axios.create({
    baseURL_local: 'http://localhost:8080/api/v1', 
    baseURL: 'https://stampiza2-server.onrender.com/api/v1', 
});

export default axiosInstance;
