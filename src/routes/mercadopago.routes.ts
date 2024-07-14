import { FastifyInstance, FastifyListenOptions } from "../lib/fastify.lib";

import { createAPaymentSchema } from "./documentation/mercadopago.payment.routes.documentation";
import { getCustomerByCustomerIdSchema, getCustomerByEmailSchema, createACustomerSchema } from "./documentation/mercadopago.customers.routes.documentation";
import { generateIdempotencyKeySchema } from "./documentation/mercadopago.idempotencykey.routes.documentation";

import { PaymentsController } from "../controllers/mercadopago/payments.controller";
import { IdempotencyKeyController } from "../controllers/mercadopago/idempotencykey.controller";
import { CustomersController } from "../controllers/mercadopago/customers.controller";



const MercadoPagoRouter = async (app: FastifyInstance, opts: FastifyListenOptions) => {
  app.post(`/idempotencykey/create`, { schema: generateIdempotencyKeySchema }, IdempotencyKeyController.generateIdempotencyKey);
  app.post(`/payments/create`, { schema: createAPaymentSchema }, PaymentsController.paymentsCreate);
  app.post(`/customers/findbyid`, { schema: getCustomerByCustomerIdSchema }, CustomersController.findByCustomerId)
  app.post(`/customers/findbyemail`, { schema: getCustomerByEmailSchema }, CustomersController.findByEmail)
  app.post(`/customers/create`, { schema: createACustomerSchema }, CustomersController.create)
}


export default MercadoPagoRouter;