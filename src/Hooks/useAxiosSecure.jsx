import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';


const instance = axios.create({
  baseURL: "http://localhost:3000",

});

const useAxiosSecure = () => {
  const {user, logOut} = useContext(AuthContext);
  const navigate = useNavigate();
    
    useEffect(() => {

      const requestInterceptor =instance.interceptors.request.use((config) => {
      // console.log("Request Interceptor: Adding Authorization header");
      const token = user?.accessToken;
      config.headers.authorization = `Bearer ${token}`;
      return config;
    })

    // response interceptor to handle 401 errors
    const responseInterceptor = instance.interceptors.response.use(res => {
      return res;
    }, err => {
      const status = err.status;
      if (status === 401 || status === 403) {
        console.log("Response Interceptor: Unauthorized or Forbidden response received");
        logOut()
        .then(() => {
          navigate('/login');
        })

      }
      
    })
    



      return () => {
        instance.interceptors.request.eject(requestInterceptor);
        instance.interceptors.response.eject(responseInterceptor);
      };

    }, [user, logOut, navigate]);
    return instance;
};

export default useAxiosSecure;