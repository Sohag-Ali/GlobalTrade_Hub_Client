import axios from 'axios';
import React from 'react';

const instance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true, 
});

const useAxiosSecure = () => {
    const {}
    instance.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    return instance;
};

export default useAxiosSecure;