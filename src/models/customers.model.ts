import { axios, axiosInstance, AxiosError } from "../lib/axios.lib";
import { ICustomerCreateBody, ICustomerCreateResponse } from "../interfaces/customers.interfaces";
import { IHttpErrorResponse } from "../interfaces/http.interfaces";


const ENDPOINT = "/customers";

export default class CustomerModel {
  status: number;

  constructor() {
    this.status = 200;
  }

  async create(customerData: ICustomerCreateBody): Promise<ICustomerCreateResponse | IHttpErrorResponse> {
    try {
      let response = await axiosInstance.post(ENDPOINT, customerData);
      let customerResponseData: ICustomerCreateResponse = response.data;

      this.status = 201;
      return customerResponseData;

    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<any>;

        console.error(`AxiosError: ${axiosError.message}`);

        const errorResponse: IHttpErrorResponse = {
          status: axiosError.response?.status || 500,
          message: axiosError.response?.data?.message || axiosError.message,
          response: axiosError.response?.data,
        };

        this.status = errorResponse.status;

        return errorResponse;
      } else {
        console.error(`Unexpected Error: ${error}`);

        const errorResponse: IHttpErrorResponse = {
          status: 500,
          message: "An unexpected error occurred",
        };

        this.status = errorResponse.status;
        return errorResponse;
      }
    }
  }

}
