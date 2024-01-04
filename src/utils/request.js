import axios from 'axios';
import config from '@/config/index';

function createService(baseUrl) {

  const service = axios.create({
    baseURL: baseUrl,
    timeout: config.timeout
  });

  // request interceptor
  service.interceptors.request.use(
    axiosConfig => {
      axiosConfig.headers['Content-Type'] === 'application/x-www-form-urlencoded';
      return axiosConfig;
    },
    error => {
      Promise.reject(error);
    }
  )

  // response interceptor
  service.interceptors.response.use(
    response => {
      return response.data;
    },
    error => {
      if (error.response.status === 401) {
        alert('Login has expired, please log in again');
      } 
      return Promise.reject(error);
    }
  )
  return service;
}

const serviceForDomainA = createService(config.api);
const serviceForDomainB = createService(config.auth);

export {
  serviceForDomainA,
  serviceForDomainB
}