import { FastifyInstance, FastifyListenOptions } from "fastify";

import { HealthRoutes } from "./health.routes";

import { MercadoPagoPaymentController } from "../controllers/mercadopago.payment.controller";

import { createAPaymentSchema } from "./documentation/mercadopago.payment.routes.documentation";



const router = async (app: FastifyInstance, opts: FastifyListenOptions) => {

  app.get('/health', HealthRoutes.Main); 
  app.post(`/payments/create`, { schema: createAPaymentSchema }, MercadoPagoPaymentController.createAPayment);
}


export default router;