import AsyncStorage from "@react-native-async-storage/async-storage";
import Axios, { InternalAxiosRequestConfig } from "axios";

export const axios =  Axios.create({
	baseURL: "http://10.0.0.105:3300"
});


let onUnauthorizedCallback: (() => void) | null = null;


export const registerUnauthorizedHandler = (callback: () => void) => {
  onUnauthorizedCallback = callback;
};


axios.interceptors.request.use(async (config) => {
	const token = await AsyncStorage.getItem("userToken");
	if(token) config.headers.Authorization = `Bearer ${token}`;
	return config;
})


axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401 && onUnauthorizedCallback) onUnauthorizedCallback();
    return Promise.reject(error);
  }
);