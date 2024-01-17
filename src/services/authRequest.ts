import { deleteAccessToken, getAccessToken } from "@/lib/auth-utils";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

interface AxiosRequestPayload extends AxiosRequestConfig {
  payload?: Record<string, any>;
}

const axiosRequest: AxiosInstance = axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    lang: "en",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosRequest.interceptors.request.use(
  function (config) {
    const token = getAccessToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosRequest.interceptors.response.use(undefined, function (err) {
  return new Promise(function (resolve, reject) {
    if (err.response.status === 401) {
      deleteAccessToken();
    }
    reject(err);
  });
});

const authRequest = (obj: AxiosRequestPayload = {}): Promise<AxiosResponse> => {
  const requestPayload: AxiosRequestPayload = {
    ...obj,
    data: obj?.payload || {},
  };
  return axiosRequest(requestPayload);
};

export { authRequest };
