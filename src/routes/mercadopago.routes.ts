import { FastifyInstance, FastifyListenOptions } from "../lib/fastify.lib";
import { createAPaymentSchema } from "./documentation/mercadopago.payment.routes.documentation";
import { generateIdempotencyKeySchema } from "./documentation/mercadopago.idempotencykey.routes.documentation";
import { PaymentsController } from "../controllers/mercadopago/payments.controller";
import { IdempotencyKeyController } from "../controllers/mercadopago/Idempotencykey.controller";


const MercadoPagoRouter = async (app: FastifyInstance, opts: FastifyListenOptions) => {
  app.post(`/idempotencykey/create`, { schema: generateIdempotencyKeySchema }, IdempotencyKeyController.generateIdempotencyKey);
  app.post(`/payments/create`, { schema: createAPaymentSchema }, PaymentsController.paymentsCreate);
}


export default MercadoPagoRouter;