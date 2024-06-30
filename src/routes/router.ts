import { FastifyInstance, FastifyListenOptions } from "fastify";
import { TestRoutes } from "./testroutes";
import { MercadoPagoPaymentController } from "../controllers/mercadopagopayment";

const router = async (app: FastifyInstance, opts: FastifyListenOptions) => {
  app.get('/', TestRoutes.Main);

  // ************* PAYMENTS ROUTES ************* //  
  app.post(`/payments/create`, MercadoPagoPaymentController.createAPayment);
}


export default router;