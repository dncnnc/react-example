import axios from 'axios';
import '../services';

const axiosInstance = axios.create({});

axiosInstance.interceptors.response.use(
  (res) => {
    return res?.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
