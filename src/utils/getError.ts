import {
  axios,
  axiosInstance,
  AxiosError
} from "../lib/axios.lib";

import { IHttpErrorResponse } from "../interfaces/http.interfaces";

export const getError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<any>;

    const errorResponse: IHttpErrorResponse = {
      status: axiosError.response?.status || 500,
      message: axiosError.response?.data?.message || axiosError.message,
      response: axiosError.response?.data,
    };

    return errorResponse;
  } else {
    
    const errorResponse: IHttpErrorResponse = {
      status: 500,
      message: "An unexpected error occurred",
    };
    return errorResponse;
  }
}