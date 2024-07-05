import { axios, axiosInstance, AxiosError } from "../lib/axios.lib";
import { customerCreateBody, customerCreateResponse } from "../interfaces/customers.interfaces";
import { httpErrorResponse } from "../interfaces/http.interfaces";


const ENDPOINT = "/customers";

export default class CustomerModel {
  status: number;

  constructor() {
    this.status = 200;
  }

  async create(customerData: customerCreateBody): Promise<customerCreateResponse | httpErrorResponse> {
    try {
      let response = await axiosInstance.post(ENDPOINT, customerData);
      let customerResponseData: customerCreateResponse = response.data;

      this.status = 201;
      return customerResponseData;

    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<any>;

        console.error(`AxiosError: ${axiosError.message}`);

        const errorResponse: httpErrorResponse = {
          status: axiosError.response?.status || 500,
          message: axiosError.response?.data?.message || axiosError.message,
          response: axiosError.response?.data,
        };

        this.status = errorResponse.status;

        return errorResponse;
      } else {
        console.error(`Unexpected Error: ${error}`);

        const errorResponse: httpErrorResponse = {
          status: 500,
          message: "An unexpected error occurred",
        };

        this.status = errorResponse.status;
        return errorResponse;
      }
    }
  }

}
