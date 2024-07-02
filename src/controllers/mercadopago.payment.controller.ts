import { FastifyReply, FastifyRequest } from "fastify";
import { PaymentResponse } from "mercadopago/dist/clients/payment/commonTypes";

import {
  EMercadoPagoStatus,
  IMercadoPagoPaymentBody,
  IPaymentResponseData,
  IPaymentResponseErroData
} from "../interfaces/mercadopago.interface";

import { MercadoPago } from "../models/mercadopago.model";
import { ACCESS_TOKEN } from "../config/mercadopago.config";

export const MercadoPagoPaymentController = {

  async createAPayment(req: FastifyRequest<{ Body: IMercadoPagoPaymentBody }>, res: FastifyReply) {

    const { payment, security } = req.body;

    const mMercadoPago = new MercadoPago({
      accessToken: ACCESS_TOKEN,
      options: {
        timeout: 5000,
        idempotencyKey: security.idempotencyKey
      }
    });

    let result: PaymentResponse | any = await mMercadoPago.createAPayment(
      {
        description: payment.description,
        payer: {
          email: payment.payer.email
        },
        payment_method_id: payment.payment_method_id,
        transaction_amount: payment.transaction_amount
      },
      {
        idempotencyKey: security.idempotencyKey
      }
    );

    if (mMercadoPago.status === EMercadoPagoStatus.PAYMENT_CREATED) {

      let data: IPaymentResponseData = {
        id: result.id,
        payment_method_id: result.payment_method_id,
        qr_code: result?.point_of_interaction?.transaction_data?.qr_code,
        qr_code_base64: result?.point_of_interaction?.transaction_data?.qr_code_base64
      }

      res.status(201).send(data);

    } else if (mMercadoPago.status === EMercadoPagoStatus.PAYMENT_CREATING_ERROR) {

      let data: IPaymentResponseErroData = {
        message: result?.message,
        error: result?.error,
        status: result?.status,
        cause: result?.cause,
      }

      res.status(400).send(data);
    } else {
      res.status(500).send({ message: "Unexpected error, contact support" })
    }
  }
}
