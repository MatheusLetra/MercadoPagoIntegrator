import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.MERCADOPAGO_BASE_URL,
  timeout: 5000
});

axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN}`;

export { axios, axiosInstance, AxiosError }
