import { FastifyInstance, FastifyListenOptions } from "fastify";
import { createAPaymentSchema } from "./documentation/mercadopago.payment.routes.documentation";
import { PaymentsController } from "../controllers/mercadopago/payments.controller";

const MercadoPagoRouter = async (app: FastifyInstance, opts: FastifyListenOptions) => {
  app.post(`/payments/create`, { schema: createAPaymentSchema }, PaymentsController.paymentsCreate);
}


export default MercadoPagoRouter;