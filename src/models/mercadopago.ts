import {
  MercadoPagoConfig,
  Payment
} from "mercadopago";

import {
  EMercadoPagoStatus,
  IMercadoPagoConfigs,
  IMercadoPagoPaymentBody,
  IMercadoPagoRequestOptions
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

  createNewPayment(paymentBody: IMercadoPagoPaymentBody, requestOptions: IMercadoPagoRequestOptions) {

    const payment = new Payment(this.client);

    const body = {
      transaction_amount: paymentBody.transaction_amount,
      description: paymentBody.description,
      payment_method_id: paymentBody.payment_method_id,
      payer: {
        email: paymentBody.payer.email
      },
    };


    payment.create({ body, requestOptions })
      .then((paymentResponse) => {
        this.status = EMercadoPagoStatus.PAYMENT_CREATED;
        console.log(paymentResponse)
      })
      .catch((error) => {
        this.status = EMercadoPagoStatus.PAYMENT_CREATING_ERROR;
        console.log(error);
      });
  }
}
