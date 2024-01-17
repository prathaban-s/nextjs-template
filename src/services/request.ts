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

const request = (obj: AxiosRequestPayload = {}): Promise<AxiosResponse> => {
  const requestPayload: AxiosRequestPayload = {
    ...obj,
    data: obj?.payload || {},
  };
  return axiosRequest(requestPayload);
};

export { request };
