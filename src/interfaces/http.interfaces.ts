export interface IHttpErrorResponse {
  status: number;
  message: string;
  response?: {
    data?: any;
    [key: string]: any;
  };
}