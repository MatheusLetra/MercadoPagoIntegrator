export interface IMercadoPagoConfigs {
  accessToken: string;
  options: {
    timeout: number,
    idempotencyKey: string;
  }
}

export interface IMercadoPagoRequestOptions {
  idempotencyKey: string;
}

export interface IMercadoPagoPaymentBody {
  transaction_amount: number;
  description: string;
  payment_method_id: string;
  payer: {
    email: string;
  }
}

export enum EMercadoPagoStatus {
  CLIENT_INITIALIZED = "CLIENT_INITIALIZED",
  PAYMENT_CREATED = "PAYMENT_CREATED",
  PAYMENT_CREATING_ERROR = "PAYMENT_CREATING_ERROR",
  PAYMENT_DETAILS_SEARCHED = "PAYMENT_DETAILS_SEARCHED",
  PAYMENT_GETTING_ERROR = "PAYMENT_GETTING_ERROR",
  PAYMENT_CANCELED = "PAYMENT_CANCELED",
  PAYMENT_CANCELING_ERROR = "PAYMENT_CANCELING_ERROR"
}