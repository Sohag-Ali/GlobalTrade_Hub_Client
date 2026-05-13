import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://global-trade-hub-blond.vercel.app",
});
const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
