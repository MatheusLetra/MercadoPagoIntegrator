import { axiosInstance } from "../lib/axios.lib";

import {
  ICustomerFindAndCreateBody,
  ICustomerFindByEmailResponse,
  ICustomerCreateResponse,
  ICustomerFindByCustomerIdResponse
} from "../interfaces/customers.interfaces";

import { IHttpErrorResponse } from "../interfaces/http.interfaces";
import { getError } from "../utils/getError";


const ENDPOINT = "/customers";

export default class CustomerModel {
  status: number;

  constructor() {
    this.status = 200;
  }

  async findByCustomerId(customerId: string) {
    try {
      let response = await axiosInstance.get(`${ENDPOINT}/${customerId}`);

      let customerResponseData: ICustomerFindByCustomerIdResponse = response.data;
      this.status = 201;
      return customerResponseData;

    } catch (error) {
      let result = getError(error);
      this.status = result.status;
      return result;
    }
  }

  async findByEmail(customerEmail: string): Promise<ICustomerFindByEmailResponse | IHttpErrorResponse> {
    try {
      let response = await axiosInstance.get(`${ENDPOINT}/search?email=${customerEmail}`);
      let customerResponseData: ICustomerFindByEmailResponse = response.data;

      this.status = 201;
      return customerResponseData;

    } catch (error) {
      let result = getError(error);
      this.status = result.status;
      return result;
    }
  }

  async create(customerData: ICustomerFindAndCreateBody): Promise<ICustomerCreateResponse | IHttpErrorResponse> {
    try {
      let response = await axiosInstance.post(ENDPOINT, customerData);
      let customerResponseData: ICustomerCreateResponse = response.data;

      this.status = 201;
      return customerResponseData;

    } catch (error) {
      let result = getError(error);
      this.status = result.status;
      return result;
    }
  }

}
