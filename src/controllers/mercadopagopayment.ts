import { FastifyReply, FastifyRequest } from "fastify";

import { IMercadoPagoPaymentBody } from "../interfaces/mercadopago";

export const MercadoPagoPaymentController = {

  async createAPayment(req: FastifyRequest<{ Body: { payment: IMercadoPagoPaymentBody } }>, res: FastifyReply) {

    const { payment } = req.body;

    console.log(payment);

    res.status(200).send({ message: "Mercado Pago Create A Payment Route" })
  }

}
