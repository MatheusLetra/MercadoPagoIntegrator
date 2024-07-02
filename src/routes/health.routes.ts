import { FastifyReply, FastifyRequest } from "fastify";

export const HealthRoutes = {
  async Main(req: FastifyRequest, res: FastifyReply) {
    res.status(200).send({ message: "Welcome to Mercado Pago Integrator Server" })
  }
}
