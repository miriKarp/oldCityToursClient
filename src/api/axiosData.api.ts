import axios from 'axios';
import store from '../redux/store';
import { logout } from '../redux/slices/userSlices';

const axiosData = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosData.interceptors.request.use(
    (config) => {

        const token = localStorage.getItem('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        else {
            console.log("Axios Interceptor: Token not found in localStorage under key 'token'");
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosData.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error("Unauthorized request (401) received from server. Token might be missing, invalid, or expired.");
            localStorage.removeItem('user');
            localStorage.removeItem('token');

            store.dispatch(logout());

            window.location.href = "/signin";
        }
        console.error("Axios Response Error:", error.response?.status, error.message, error.response?.data);
        return Promise.reject(error);
    }
);

export default axiosData;