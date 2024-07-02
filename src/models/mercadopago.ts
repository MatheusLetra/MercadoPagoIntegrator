import {
  MercadoPagoConfig,
  Payment
} from "mercadopago";

import {
  EMercadoPagoStatus,
  IMercadoPagoConfigs,
  IMercadoPagoRequestOptions,
  IPaymentRequestData
} from "../interfaces/mercadopago";


export class MercadoPago {
  client;
  status: EMercadoPagoStatus;
  constructor(configs: IMercadoPagoConfigs) {
    this.client = new MercadoPagoConfig({
      accessToken: configs.accessToken,
      options: {
        timeout: configs.options.timeout,
        idempotencyKey: configs.options.idempotencyKey
      }
    });

    this.status = EMercadoPagoStatus.CLIENT_INITIALIZED;
  }

  async createAPayment(paymentBody: IPaymentRequestData, requestOptions: IMercadoPagoRequestOptions) {

    const payment = new Payment(this.client);

    const body = {
      transaction_amount: paymentBody.transaction_amount,
      description: paymentBody.description,
      payment_method_id: paymentBody.payment_method_id,
      payer: {
        email: paymentBody.payer.email
      },
    };


    return await payment.create({ body, requestOptions })
      .then((paymentResponse) => {
        this.status = EMercadoPagoStatus.PAYMENT_CREATED;
        return paymentResponse;
      })
      .catch((error) => {
        this.status = EMercadoPagoStatus.PAYMENT_CREATING_ERROR;
        return error;
      });
  }

  getAPayment(paymentId: string, requestOptions: IMercadoPagoRequestOptions) {
    const payment = new Payment(this.client);

    payment.get({
      id: paymentId,
      requestOptions
    })
      .then((paymentResponse) => {
        this.status = EMercadoPagoStatus.PAYMENT_DETAILS_SEARCHED;
        console.log(paymentResponse)
      })
      .catch((error) => {
        this.status = EMercadoPagoStatus.PAYMENT_GETTING_ERROR;
        console.log(error);
      });
  }

  cancelAPayment(paymentId: string, requestOptions: IMercadoPagoRequestOptions) {
    const payment = new Payment(this.client);

    payment.cancel({ id: paymentId, requestOptions })
      .then((paymentResponse) => {
        this.status = EMercadoPagoStatus.PAYMENT_CANCELED;
        console.log(paymentResponse)
      })
      .catch((error) => {
        this.status = EMercadoPagoStatus.PAYMENT_CANCELING_ERROR;
        console.log(error);
      });
  }
}
