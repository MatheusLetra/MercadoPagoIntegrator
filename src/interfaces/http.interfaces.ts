export interface httpErrorResponse {
  status: number;
  message: string;
  response?: {
    data?: any;
    [key: string]: any;
  };
}