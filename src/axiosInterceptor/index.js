import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://vtp58ld4-5229.inc1.devtunnels.ms'
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    console.log("[INTERCEPTOR]", error);
    return Promise.reject(error);
  }
);


axiosInstance.interceptors.response.use(config => config, (error) => {
  console.log("[INTERCEPTOR]", error);
  if ([401, 403].includes(error.response?.status)) {
    sessionStorage.clear()
    location.replace("/auth")
  }
  return Promise.reject(error)
})

export default axiosInstance;
