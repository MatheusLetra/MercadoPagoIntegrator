import { FastifyRequest, FastifyReply } from "../lib/fastify.lib";

export const HealthController = {

  async healthStatus(req: FastifyRequest, res: FastifyReply) {
    res.status(200).send({ message: "Welcome to Mercado Pago Integrator Server" })
  }

}